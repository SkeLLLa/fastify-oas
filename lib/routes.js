const path = require('path');
const fstatic = require('fastify-static');

async function oasRoutes(fastify, options) {
  if (options.options.ui !== false) {
    fastify.route({
      url: '/',
      method: 'GET',
      schema: { hide: true },
      handler: function (req, reply) {
        const redirectUrl = req.raw.url.endsWith('/')
          ? req.raw.url
          : req.raw.url + '/';
        reply.redirect(`${redirectUrl}index.html`);
      },
    });
    const swaggerCspHeader = "script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' 'unsafe-inline' data: ; object-src 'none'";
    fastify.register(fstatic, {
      setHeaders: (res, path, stat) => {res.setHeader('Content-Security-Policy', swaggerCspHeader)},
      root: path.join(__dirname, '..', 'static'),
    });
  }

  if (options.options.json !== false) {
    fastify.route({
      url: '/json',
      method: 'GET',
      schema: { hide: true },
      handler: function (_, reply) {
        reply.send(fastify.oas());
      },
    });
  }

  if (options.options.yaml !== false) {
    fastify.route({
      url: '/yaml',
      method: 'GET',
      schema: { hide: true },
      handler: function (_, reply) {
        reply.type('application/x-yaml').send(fastify.oas({ yaml: true }));
      },
    });
  }
}

module.exports = oasRoutes;
