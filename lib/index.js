const fp = require('fastify-plugin');
const openapi = require('./openapi');

const fastifyOAS = async (fastify, opts = {}) => {
  return openapi(fastify, opts);
};

module.exports = fp(fastifyOAS, {
  fastify: '>=1.9.0',
  name: 'fastify-oas',
});
