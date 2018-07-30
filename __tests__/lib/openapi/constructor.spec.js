/// <reference types="node" />
/// <reference types="jest" />

const swParser = require('swagger-parser');

const openapi = require('../../../lib/openapi/constructor');

describe('openapi constructor', () => {
  describe('swagger 2.0 compatible', () => {
    const options = {
      swagger: {
        info: {
          title: 'Test swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
        },
        host: 'localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [{name: 'tag'}],
        externalDocs: {
          description: 'Find more info here',
          url: 'https://swagger.io',
        },
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
        security: [
          {
            apiKey: [],
          },
        ],
      },
    };
    test('generates valid swagger header', async () => {
      const api = openapi({options})();
      expect(api).toEqual({
        openapi: '3.0.0',
        info: {
          title: 'Test swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
        },
        components: {
          securitySchemes: {
            apiKey: {
              type: 'apiKey',
              name: 'apiKey',
              in: 'header',
            },
          },
        },
        tags: [{name: 'tag'}],
        externalDocs: {
          description: 'Find more info here',
          url: 'https://swagger.io',
        },
        security: [{apiKey: []}],
        servers: [{url: 'http://localhost/'}],
        paths: {},
      });
      expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi 3.0 compatible', () => {
    test('test', () => {});
  });

  describe('openapi 3.0 defaults', () => {
    test('test', () => {});
  });
});
