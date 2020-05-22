const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');
const root = require('app-root-path');

const helpers = require('../helpers');

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

const flattenObject = (ob, prefix) => {
  const toReturn = {};
  prefix = prefix ? prefix + '.' : '';

  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if (typeof ob[i] === 'object' && ob[i] !== null) {
      // Recursion on deeper objects
      Object.assign(toReturn, flattenObject(ob[i], prefix + i));
    } else {
      toReturn[prefix + i] = ob[i];
    }
  }
  return toReturn;
};

const get = (value, path, defaultValue) =>
  String(path)
    .split('.')
    .reduce((acc, v) => {
      try {
        return acc[v] === undefined ? defaultValue : acc[v];
      } catch (e) {
        return defaultValue;
      }
    }, value);

module.exports = ({
  options = {},
  getSchemas,
  getSchema,
  routes = [],
} = {}) => {
  try {
    const data = fs.readFileSync(path.join(root.toString(), 'package.json'), {
      encoding: 'utf8',
    });
    const { name, description, version } = JSON.parse(data);
    if (name) DEFAULTS.name = name;
    if (description) DEFAULTS.description = description;
    if (version) DEFAULTS.version = version;
  } catch (_) {
    // do nothing
  }

  const cache = {
    swaggerObject: null,
    swaggerString: null,
  };

  const handler = (opts = {}) => {
    // opts = Object.assign({}, options, opts);

    const { yaml, swagger, openapi, addModels, hideUntagged } = Object.assign(
      {
        yaml: false,
        swagger: {},
        openapi: DEFAULTS.openapi,
        addModels: false,
        hideUntagged: false,
      },
      options,
      opts
    );

    if (yaml) {
      if (cache.swaggerString) return cache.swaggerString;
    } else {
      if (cache.swaggerObject) return cache.swaggerObject;
    }

    const swaggerObject = {};
    swaggerObject.openapi = openapi;
    if (swagger.info) {
      swaggerObject.info = swagger.info;
    } else {
      swaggerObject.info = {
        title: DEFAULTS.name,
        description: DEFAULTS.description,
        version: DEFAULTS.version,
      };
    }
    swaggerObject.components = swagger.components || {};
    if (swagger.tags) {
      swaggerObject.tags = swagger.tags;
    }
    if (swagger['x-tagGroups']) {
      // redoc extension
      swaggerObject['x-tagGroups'] = swagger['x-tagGroups'];
    }
    if (swagger.externalDocs) {
      swaggerObject.externalDocs = swagger.externalDocs;
    }
    if (swagger.security) {
      swaggerObject.security = swagger.security;
    }
    if (swagger.servers) {
      // openapi 3
      swaggerObject.servers = swagger.servers;
    } else {
      const host = swagger.host || DEFAULTS.host;
      const schemes = swagger.schemes || DEFAULTS.schemes;
      const basePath = swagger.basePath || DEFAULTS.basePath;
      // port from swagger 2
      swaggerObject.servers = schemes.map((sch) => {
        return {
          url: `${sch}://${host}${basePath}`,
        };
      });
    }
    if (swagger.securityDefinitions) {
      // swagger 2 securityDefinitions
      swaggerObject.components.securitySchemes = Object.assign(
        {},
        swaggerObject.components.securitySchemes,
        swagger.securityDefinitions
      );
    }
    const defaultConsumes = swagger.consumes || DEFAULTS.consumes;
    const defaultProduces = swagger.produces || DEFAULTS.produces;

    if (addModels && typeof getSchemas === 'function') {
      const schemas = getSchemas();
      const schemaKeys = Object.keys(schemas);
      swaggerObject.components.schemas = swaggerObject.components.schemas || {};
      const schemaDst = swaggerObject.components.schemas;

      for (const schemaKey of schemaKeys) {
        const schema = helpers.clone(schemas[schemaKey]);
        const id = schema.$id || schemaKey;
        delete schema.$id;
        schemaDst[id] = schema;
      }
    }
    swaggerObject.paths = {};

    for (const routeOpts of routes) {
      const route = helpers.clone(routeOpts);
      if (
        (route.schema && route.schema.hide) ||
        (hideUntagged && (!route.schema || !route.schema.tags))
      ) {
        continue;
      }
      const schema = route.schema;
      const url = helpers.formatParamUrl(route.url);
      const swaggerRoute = swaggerObject.paths[url] || {};
      const swaggerMethod = {
        responses: {},
      };
      const parameters = [];
      const methods =
        typeof route.method === 'string' ? [route.method] : route.method;
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

        if (schema.operationId) {
          swaggerMethod.operationId = schema.operationId;
        }

        if (schema.querystring) {
          const flat = flattenObject(schema.querystring);
          const refs = Object.keys(flat).filter((k) => k.indexOf('$ref') > -1);
          if (refs.length > 0) {
            refs.forEach((ref) => {
              const refValue = get(schema.querystring, ref);
              if (refValue.indexOf('#') === refValue.length - 1) {
                const schemaId = refValue.substring(0, refValue.indexOf('#'));
                const resolved = getSchema(schemaId);
                helpers.genPath(parameters, resolved);
              }
            });
          } else {
            helpers.genQuery(parameters, schema.querystring);
          }
        }

        if (schema.body) {
          swaggerMethod.requestBody = {};
          const flat = flattenObject(schema.body);
          const refs = Object.keys(flat).filter((k) => k.indexOf('$ref') > -1);
          if (refs.length > 0) {
            refs.forEach((ref) => {
              const refValue = get(schema.body, ref);
              if (refValue.indexOf('#') === refValue.length - 1) {
                const schemaId = refValue.substring(0, refValue.indexOf('#'));
                const resolved = getSchema(schemaId);
                helpers.genBody(
                  swaggerMethod.requestBody,
                  resolved,
                  schema.consumes
                );
              }
            });
          } else {
            helpers.genBody(
              swaggerMethod.requestBody,
              schema.body,
              schema.consumes
            );
          }
        }

        if (schema.params) {
          const flat = flattenObject(schema.params);
          const refs = Object.keys(flat).filter((k) => k.indexOf('$ref') > -1);
          if (refs.length > 0) {
            refs.forEach((ref) => {
              const refValue = get(schema.params, ref);
              if (refValue.indexOf('#') === refValue.length - 1) {
                const schemaId = refValue.substring(0, refValue.indexOf('#'));
                const resolved = getSchema(schemaId);
                helpers.genPath(parameters, resolved);
              }
            });
          } else {
            helpers.genPath(parameters, schema.params);
          }
        }

        if (schema.headers) {
          const flat = flattenObject(schema.headers);
          const refs = Object.keys(flat).filter((k) => k.indexOf('$ref') > -1);
          if (refs.length > 0) {
            refs.forEach((ref) => {
              const refValue = get(schema.headers, ref);
              if (refValue.indexOf('#') === refValue.length - 1) {
                const schemaId = refValue.substring(0, refValue.indexOf('#'));
                const resolved = getSchema(schemaId);
                helpers.genHeaders(parameters, resolved);
              }
            });
          } else {
            helpers.genHeaders(parameters, schema.headers);
          }
        }

        if (schema.cookies) {
          const flat = flattenObject(schema.cookies);
          const refs = Object.keys(flat).filter((k) => k.indexOf('$ref') > -1);
          if (refs.length > 0) {
            refs.forEach((ref) => {
              const refValue = get(schema.cookies, ref);
              if (refValue.indexOf('#') === refValue.length - 1) {
                const schemaId = refValue.substring(0, refValue.indexOf('#'));
                const resolved = getSchema(schemaId);
                helpers.genCookies(parameters, resolved);
              }
            });
          } else {
            helpers.genCookies(parameters, schema.cookies);
          }
        }

        if (schema.response) {
          const flat = flattenObject(schema.response);
          const refs = Object.keys(flat).filter((k) => k.indexOf('$ref') > -1);
          if (refs.length > 0) {
            refs.forEach((ref) => {
              const code = ref.split('.')[0];
              const refValue = get(schema.response, ref);
              if (refValue.indexOf('#') === refValue.length - 1) {
                const schemaId = refValue.substring(0, refValue.indexOf('#'));
                const resolved = getSchema(schemaId);
                const ret = {};
                ret[code] = resolved;
                helpers.genResponse(
                  swaggerMethod.responses,
                  ret,
                  schema.produces
                );
              }
            });
          } else {
            helpers.genResponse(
              swaggerMethod.responses,
              schema.response || { 200: { description: 'Default Response' } },
              schema.produces
            );
          }
        } else {
          helpers.genResponse(
            swaggerMethod.responses,
            schema.response || { 200: { description: 'Default Response' } },
            schema.produces
          );
        }

        if (parameters.length) {
          swaggerMethod.parameters = parameters;
        }
      } else {
        swaggerMethod.responses = {
          '200': {
            description: 'default response',
          },
        };
      }
      swaggerObject.paths[url] = swaggerRoute;
    }

    if (yaml) {
      const swaggerString = jsyaml.safeDump(swaggerObject, {
        skipInvalid: true,
      });
      cache.swaggerString = swaggerString;
      return swaggerString;
    }

    cache.swaggerObject = swaggerObject;
    return swaggerObject;
  };
  return handler;
};
