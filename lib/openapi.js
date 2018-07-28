const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const helpers = require('./helpers');

const DEFAULTS = {
  name: 'fastify-oas',
  description: 'Fastify OpenAPI',
  version: '1.0.0',
  openapi: '3.0.0',
  host: '127.0.0.1',
  schemes: ['http'],
  basePath: '/',
  consumes: ['*/*'],
  produces: ['*/*'],
};

const openapi = async (fastify, options = {}) => {
  const routes = [];
  const schemas = helpers.clone(fastify.getSchemas());
  let pkg;
  try {
    const data = await readFile(path.join(__dirname, 'package.json'));
    pkg = JSON.parse(data);
  } catch (_) {
    pkg = {
      name: DEFAULTS.name,
      description: DEFAULTS.description,
      version: DEFAULTS.version,
    };
  }

  if (options.exposeRoute === true) {
    const prefix = options.routePrefix || '/documentation';
    fastify.register(require('./routes'), {prefix});
  }

  const cache = {
    swaggerObject: null,
    swaggerString: null,
  };

  fastify.addHook('onRoute', (routeOptions) => {
    routes.push(helpers.clone(routeOptions));
  });

  const oas = (opts = {}) => {
    opts = Object.assign({}, options, opts);
    if (opts && opts.yaml) {
      if (cache.swaggerString) return cache.swaggerString;
    } else {
      if (cache.swaggerObject) return cache.swaggerObject;
    }
    const swaggerObject = {};
    const sw = opts.swagger || {};
    swaggerObject.openapi = opts.openapi || '3.0.0';
    if (sw.info) {
      swaggerObject.info = sw.info;
    } else {
      swaggerObject.info = {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
      };
    }
    swaggerObject.components = sw.components || {};
    if (sw.security) {
      swaggerObject.security = sw.security;
    }
    if (sw.servers) {
      // openapi 3
      swaggerObject.servers = sw.servers;
    } else {
      const host = sw.host || DEFAULTS.host;
      const schemes = sw.schemes || DEFAULTS.schemes;
      const basePath = sw.basePath || DEFAULTS.basePath;
      // port from swagger 2
      swaggerObject.servers = schemes.map((sch) => {
        return {
          url: `${sch}://${host}${basePath}`,
        };
      });
    }
    if (sw.securityDefinitions) {
      // swagger 2 securityDefinitions
      swaggerObject.components.securitySchemes = Object.assign(
        {},
        swaggerObject.components.securitySchemes,
        sw.securityDefinitions
      );
    }
    const defaultConsumes = sw.consumes || DEFAULTS.consumes;
    const defaultProduces = sw.produces || DEFAULTS.produces;

    if (opts.addModels) {
      const schemaKeys = Object.keys(schemas);
      swaggerObject.components.schemas = swaggerObject.components.schemas || {};
      const schemaDst = swaggerObject.components.schemas;

      for (const schemaKey of schemaKeys) {
        const schema = helpers.clone(schemas[schemaKey]);
        const id = schema.$id;
        delete schema.$id;
        if (schema.min) {
          schema.minimum = schema.min;
          delete schema.min;
        }
        if (schema.max) {
          schema.maximum = schema.max;
          delete schema.max;
        }
        schemaDst[id] = schema;
      }
    }
    swaggerObject.paths = {};

    for (const route of routes) {
      if (route.schema && route.schema.hide) {
        continue;
      }

      const schema = route.schema;
      const url = helpers.formatParamUrl(route.url);
      const swaggerRoute = swaggerObject.paths[url] || {};
      const swaggerMethod = {
        responses: {},
      };
      const parameters = [];
      const methods = typeof route.method === 'string' ? [route.method] : route.method;
      for (const method of methods) {
        swaggerRoute[method.toLowerCase()] = swaggerMethod;
      }
      if (schema) {
        schema.consumes = schema.consumes || defaultConsumes;
        schema.produces = schema.produces || defaultProduces;
        if (schema.summary) {
          swaggerMethod.summary = schema.summary;
        }

        if (schema.description) {
          swaggerMethod.description = schema.description;
        }

        if (schema.tags) {
          swaggerMethod.tags = schema.tags;
        }

        if (schema.deprecated) {
          swaggerMethod.deprecated = schema.deprecated;
        }

        if (schema.security) {
          swaggerMethod.security = schema.security;
        }

        if (schema.querystring) {
          helpers.genQuery(parameters, schema.querystring);
        }

        if (schema.body) {
          swaggerMethod.requestBody = {};
          helpers.genBody(swaggerMethod.requestBody, schema);
        }

        if (schema.params) {
          helpers.genPath(parameters, schema.params);
        }

        if (schema.headers) {
          helpers.genHeaders(parameters, schema.headers);
        }

        if (schema.response) {
          helpers.genResponse(swaggerMethod.responses, schema);
        }

        if (parameters.length) {
          swaggerMethod.parameters = parameters;
        }
      }
      swaggerObject.paths[url] = swaggerRoute;
    }
    if (opts && opts.yaml) {
      const swaggerString = yaml.safeDump(swaggerObject, {skipInvalid: true});
      cache.swaggerString = swaggerString;
      return swaggerString;
    }

    cache.swaggerObject = swaggerObject;
    return swaggerObject;
  };

  fastify.decorate('oas', oas);
};

module.exports = openapi;
