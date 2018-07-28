const path = require('path');
const static = require('fastify-static');

async function oasRoutes(fastify, opts) {
  fastify.route({
    url: '/',
    method: 'GET',
    schema: {hide: true},
    handler: (_, reply) =>
      reply.redirect(path.join(fastify.basePath, 'index.html')),
  });

  fastify.route({
    url: '/json',
    method: 'GET',
    schema: {hide: true},
    handler: function(req, reply) {
      reply.send(fastify.oas());
    },
  });

  fastify.route({
    url: '/yaml',
    method: 'GET',
    schema: {hide: true},
    handler: function(req, reply) {
      reply.type('application/x-yaml').send(fastify.oas({yaml: true}));
    },
  });

  // serve swagger-ui with the help of fastify-static
  fastify.register(static, {
    root: path.join(__dirname, '..', 'static'),
  });

  // next();
}

module.exports = oasRoutes;
