const fp = require('fastify-plugin');
const openapi = require('./openapi');

module.exports = fp(async (fastify, opts) => {
  return openapi(fastify, opts);
}, {
  fastify: '>=2.0.0',
  name: 'fastify-oas',
});
