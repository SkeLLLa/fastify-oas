const fp = require('fastify-plugin');
const openapi = require('./openapi');

module.exports = fp(async (fastify, opts) => {
  return openapi(fastify, opts);
}, {
  fastify: '>=1.9.0',
  name: 'fastify-oas',
});
