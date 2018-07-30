const helpers = require('../helpers');
const constructor = require('./constructor');

module.exports = async (fastify, options = {}) => {
  const routes = [];
  const schemas = helpers.clone(fastify.getSchemas());

  if (options.exposeRoute === true) {
    const prefix = options.routePrefix || '/documentation';
    fastify.register(require('./routes'), {prefix});
  }

  fastify.addHook('onRoute', (routeOptions) => {
    routes.push(helpers.clone(routeOptions));
  });

  const openapi = constructor({options, schemas, routes});
  fastify.decorate('oas', openapi);
};

