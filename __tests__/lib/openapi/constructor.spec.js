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
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi 3.0 compatible', () => {
    const options = {
      openapi: '3.0.0',
      swagger: {
        info: {
          title: 'Test swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
        },
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              name: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
        tags: [{name: 'tag'}],
        externalDocs: {
          description: 'Find more info here',
          url: 'https://swagger.io',
        },
        security: [{bearerAuth: []}],
        servers: [
          {
            url: 'https://{prefix}.example.com:{port}',
            description: 'default server',
            variables: {
              prefix: {
                default: 'api',
                description: 'Api prefix',
              },
              port: {
                enum: ['80', '8081', '443'],
                default: '80',
              },
            },
          },
        ],
      },
    };
    test('generates valid swagger header', async () => {
      const api = openapi({options})();
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('adds fastify schemas as models', async () => {
      const opts = Object.assign({addModels: true}, options);
      const schemas = {
        sch1: {
          $id: 'sch1',
          type: 'object',
          description: 'sch1 schema',
          properties: {
            num: {
              type: 'number',
              minimum: 1,
              maximum: 1000,
              description: 'some number',
            },
            str: {
              enum: ['a', 'b', 'c'],
              default: 'b',
              description: 'some string',
              type: 'string',
            },
          },
        },
      };
      const api = openapi({options: opts, schemas})();
      expect(api).toHaveProperty('components.schemas', {
        sch1: {
          type: 'object',
          description: 'sch1 schema',
          properties: {
            num: {
              type: 'number',
              minimum: 1,
              maximum: 1000,
              description: 'some number',
            },
            str: {
              enum: ['a', 'b', 'c'],
              default: 'b',
              description: 'some string',
              type: 'string',
            },
          },
        },
      });
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi 3.0 defaults', () => {
    test('generates valid swagger header', async () => {
      const api = openapi()();
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi yaml', () => {
    test('generates valid swagger yaml', async () => {
      const api = openapi({
        options: {
          yaml: true,
        },
      })();
      const expected =
        'openapi: 3.0.0\ninfo:\n  title: fasify-oas\n  description: Fastify OpenAPI specification generator plugin\n  version: 0.2.0\ncomponents: {}\nservers:\n  - url: \'http://127.0.0.1/\'\npaths: {}\n';

      expect(api).toEqual(expected);
    });
  });

  describe('generates valid parameters', () => {
    test('generates valid body', async () => {
      const api = openapi({
        options: {
          openapi: '3.0.0',
          swagger: {
            info: {
              title: 'Test swagger',
              description: 'testing the fastify swagger api',
              version: '0.1.0',
            },
            components: {
              securitySchemes: {
                bearerAuth: {
                  type: 'http',
                  name: 'bearer',
                  bearerFormat: 'JWT',
                },
              },
            },
            tags: [{name: 'tag'}],
            externalDocs: {
              description: 'Find more info here',
              url: 'https://swagger.io',
            },
            security: [{bearerAuth: []}],
            servers: [
              {
                url: 'https://{prefix}.example.com:{port}',
                description: 'default server',
                variables: {
                  prefix: {
                    default: 'api',
                    description: 'Api prefix',
                  },
                  port: {
                    enum: ['80', '8081', '443'],
                    default: '80',
                  },
                },
              },
            ],
          },
        },
        routes: [
          {
            logLevel: '',
            method: 'POST',
            path: '/api/ep',
            url: '/api/ep',
            prefix: '/api',
            schema: {
              description: 'Description',
              tags: ['tag'],
              consumes: ['text/plain; charset=utf-8'],
              security: [{bearerAuth: []}],
              summary: 'Summary',
              body: {
                $id: 'auth',
                type: 'object',
                allOf: [
                  {
                    $id: 'obj1',
                    type: 'object',
                    properties: {
                      login: {type: 'string', description: 'User login'},
                      password: {
                        type: 'string',
                        description: 'User password',
                      },
                    },
                  },
                  {
                    $id: 'obj2',
                    type: 'object',
                    properties: {
                      auth_token: {
                        type: 'string',
                        description: 'Auth token',
                      },
                    },
                  },
                ],
              },
              response: {
                '200': {
                  description: 'Response description',
                  type: 'object',
                  properties: {status: {type: 'string'}},
                },
                '401': {
                  description: 'User not logged in',
                  type: 'object',
                  properties: {message: {type: 'string'}},
                },
              },
            },
          },
        ],
      })();
      expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            responses: {
              '200': {
                content: {
                  '*/*': {
                    schema: {
                      description: 'Response description',
                      type: 'object',
                      properties: {status: {type: 'string'}},
                    },
                  },
                },
                description: 'Response description',
              },
              '401': {
                content: {
                  '*/*': {
                    schema: {
                      description: 'User not logged in',
                      type: 'object',
                      properties: {message: {type: 'string'}},
                    },
                  },
                },
                description: 'User not logged in',
              },
            },
            summary: 'Summary',
            description: 'Description',
            tags: ['tag'],
            security: [{bearerAuth: []}],
            requestBody: {
              content: {
                'text/plain; charset=utf-8': {
                  schema: {
                    type: 'object',
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          login: {type: 'string', description: 'User login'},
                          password: {
                            type: 'string',
                            description: 'User password',
                          },
                        },
                      },
                      {
                        type: 'object',
                        properties: {
                          auth_token: {
                            type: 'string',
                            description: 'Auth token',
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      });
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('generates valid params', async () => {
      const api = openapi({
        options: {
          openapi: '3.0.0',
          swagger: {
            info: {
              title: 'Test swagger',
              description: 'testing the fastify swagger api',
              version: '0.1.0',
            },
            components: {
              securitySchemes: {
                bearerAuth: {
                  type: 'http',
                  name: 'bearer',
                  bearerFormat: 'JWT',
                },
              },
            },
            tags: [{name: 'tag'}],
            externalDocs: {
              description: 'Find more info here',
              url: 'https://swagger.io',
            },
            security: [{bearerAuth: []}],
            servers: [
              {
                url: 'https://{prefix}.example.com:{port}',
                description: 'default server',
                variables: {
                  prefix: {
                    default: 'api',
                    description: 'Api prefix',
                  },
                  port: {
                    enum: ['80', '8081', '443'],
                    default: '80',
                  },
                },
              },
            ],
          },
        },
        routes: [
          {
            logLevel: '',
            method: 'POST',
            path: '/api/ep/:id',
            url: '/api/ep/:id',
            prefix: '/api',
            schema: {
              deprecated: true,
              description: 'Description',
              tags: ['tag'],
              consumes: ['text/plain; charset=utf-8'],
              security: [{bearerAuth: []}],
              summary: 'Summary',
              params: {
                type: 'object',
                properties: {id: {type: 'number', description: 'ID'}},
              },
            },
          },
        ],
      })();
      expect(api).toHaveProperty('paths', {
        '/api/ep/{id}': {
          post: {
            responses: {
              '200': {
                description: 'Default Response',
              },
            },
            summary: 'Summary',
            deprecated: true,
            description: 'Description',
            tags: ['tag'],
            security: [{bearerAuth: []}],
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID',
                schema: {type: 'number', description: 'ID'},
              },
            ],
          },
        },
      });

      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });
});
