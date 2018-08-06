const helpers = require('../helpers');
const constructor = require('./constructor');
const docRoutes = require('../routes');

module.exports = async (fastify, options = {}) => {
  const routes = [];

  if (options.exposeRoute === true) {
    const prefix = options.routePrefix || '/documentation';
    fastify.register(docRoutes, {prefix});
  }

  fastify.addHook('onRoute', (routeOptions) => {
    routes.push(helpers.clone(routeOptions));
  });

  const openapi = constructor({
    options,
    getSchemas: fastify.getSchemas,
    routes,
  });
  fastify.decorate('oas', openapi);
};
