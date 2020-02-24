const fp = require('fastify-plugin');
const openapi = require('./openapi');

module.exports = fp(
  async (fastify, opts) => {
    return openapi(fastify, opts);
  },
  {
    fastify: '>=2.0.0 <2.12.0 || >=2.12.1 <3.0.0',
    name: 'fastify-oas',
  },
);
