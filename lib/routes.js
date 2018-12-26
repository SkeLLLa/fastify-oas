const path = require('path');
const fstatic = require('fastify-static');

async function oasRoutes(fastify) {
  fastify.route({
    url: '/',
    method: 'GET',
    schema: {hide: true},
    handler: (_, reply) =>
      reply.redirect(path.join(fastify.prefix, 'index.html')),
  });

  fastify.route({
    url: '/json',
    method: 'GET',
    schema: {hide: true},
    handler: function(_, reply) {
      reply.send(fastify.oas());
    },
  });

  fastify.route({
    url: '/yaml',
    method: 'GET',
    schema: {hide: true},
    handler: function(_, reply) {
      reply.type('application/x-yaml').send(fastify.oas({yaml: true}));
    },
  });

  // serve swagger-ui with the help of fastify-static
  fastify.register(fstatic, {
    root: path.join(__dirname, '..', 'static'),
  });

  // next();
}

module.exports = oasRoutes;
