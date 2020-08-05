const constructor = require('./constructor');
const docRoutes = require('../routes');
const symbols = require('fastify/lib/symbols');

function getSchemasRecursive(instance) {
  const schemas = {};
  Object.assign(schemas, instance.getSchemas());
  const children = instance[symbols.kChildren];
  if (children.length) {
    children.forEach((child) => {
      Object.assign(schemas, getSchemasRecursive(child));
    });
  }
  return schemas;
}

module.exports = async (fastify, options = {}) => {
  const routes = [];

  if (options.exposeRoute) {
    const prefix = options.routePrefix || '/documentation';
    fastify.register(docRoutes, { prefix, options: options.exposeRoute });
  }

  fastify.addHook('onRoute', (routeOptions) => {
    routes.push(routeOptions);
  });

  const openapi = constructor({
    options,
    getSchemas: getSchemasRecursive.bind(null, fastify),
    getSchema: fastify.getSchema.bind(fastify),
    routes,
  });
  fastify.decorate('oas', openapi);
};
