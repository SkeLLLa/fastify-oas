const path = require('path');
const fstatic = require('fastify-static');

async function oasRoutes(fastify, options) {
  if (options.options.ui !== false) {
    fastify.route({
      url: '/',
      method: 'GET',
      schema: {hide: true},
      handler: function(req, reply) {
        const redirectUrl = req.raw.originalUrl.endsWith('/') ? req.raw.originalUrl : req.raw.originalUrl + '/';
        reply.redirect(`${redirectUrl}index.html`);
      },
    });
    fastify.register(fstatic, {
      root: path.join(__dirname, '..', 'static'),
    });
  }

  if (options.options.json !== false) {
    fastify.route({
      url: '/json',
      method: 'GET',
      schema: {hide: true},
      handler: function(_, reply) {
        reply.send(fastify.oas());
      },
    });
  }

  if (options.options.yaml !== false) {
    fastify.route({
      url: '/yaml',
      method: 'GET',
      schema: {hide: true},
      handler: function(_, reply) {
        reply.type('application/x-yaml').send(fastify.oas({yaml: true}));
      },
    });
  }
}

module.exports = oasRoutes;
