/// <reference types="node" />
/// <reference types="jest" />

const swParser = require('@apidevtools/swagger-parser');

const openapi = require('../../../lib/openapi/constructor');
const { version } = require('../../../package.json');

describe('openapi constructor', () => {
  describe('swagger 2.0 compatible', () => {
    const options = {
      swagger: {
        'info': {
          title: 'Test swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
        },
        'x-tagGroups': 'testGroup',
        'host': 'localhost',
        'schemes': ['http'],
        'consumes': ['application/json'],
        'produces': ['application/json'],
        'tags': [{ name: 'tag' }],
        'externalDocs': {
          description: 'Find more info here',
          url: 'https://swagger.io',
        },
        'securityDefinitions': {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
        'security': [
          {
            apiKey: [],
          },
        ],
      },
    };
    test('generates valid swagger header', async () => {
      const api = openapi({ options })();
      await expect(api).toEqual({
        'openapi': '3.0.0',
        'info': {
          title: 'Test swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
        },
        'x-tagGroups': 'testGroup',
        'components': {
          securitySchemes: {
            apiKey: {
              type: 'apiKey',
              name: 'apiKey',
              in: 'header',
            },
          },
        },
        'tags': [{ name: 'tag' }],
        'externalDocs': {
          description: 'Find more info here',
          url: 'https://swagger.io',
        },
        'security': [{ apiKey: [] }],
        'servers': [{ url: 'http://localhost/' }],
        'paths': {},
      });
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi 3.0 compatible', () => {
    const options = {
      openapi: '3.0.0',
      swagger: {
        'info': {
          title: 'Test swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
        },
        'x-tagGroups': 'testGroup',
        'components': {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
        'tags': [{ name: 'tag' }],
        'externalDocs': {
          description: 'Find more info here',
          url: 'https://swagger.io',
        },
        'security': [{ bearerAuth: [] }],
        'servers': [
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
      const api = openapi({ options })();
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('adds fastify schemas as models', async () => {
      const opts = Object.assign({ addModels: true }, options);
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
        sch2: {
          type: 'object',
          description: 'sch2 schema',
          properties: {
            num: {
              type: 'number',
              title: 'title',
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
      const getSchemas = () => schemas;
      const api = openapi({ options: opts, getSchemas })();
      await expect(api).toHaveProperty('components.schemas', {
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
        sch2: {
          type: 'object',
          description: 'sch2 schema',
          properties: {
            num: {
              type: 'number',
              title: 'title',
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
      const apiFn = openapi();
      const api = apiFn();
      const apiCache = apiFn();
      await expect(api).toEqual(apiCache);
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi 3.0 defaults no package.json', () => {
    test('generates valid swagger header', async () => {
      jest.resetModules();
      jest.mock('fs');
      const openapi = require('../../../lib/openapi/constructor');
      const apiFn = openapi();
      const api = apiFn();
      const apiCache = apiFn();
      await expect(api).toEqual(apiCache);
      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
  });

  describe('openapi yaml', () => {
    test('generates valid swagger yaml', async () => {
      const apiFn = openapi({
        options: {
          yaml: true,
        },
      });
      const api = apiFn();
      const apiCache = apiFn();
      const expected = "openapi: 3.0.0\ninfo:\n  title: fastify-oas\n  description: Fastify OpenAPI specification generator plugin\n  version: X.X.X\ncomponents: {}\nservers:\n  - url: 'http://127.0.0.1/'\npaths: {}\n".replace(
        'X.X.X',
        version
      );

      await expect(api).toEqual(apiCache);
      await expect(api).toEqual(expected);
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
                  scheme: 'bearer',
                  bearerFormat: 'JWT',
                },
              },
            },
            tags: [{ name: 'tag' }],
            externalDocs: {
              description: 'Find more info here',
              url: 'https://swagger.io',
            },
            security: [{ bearerAuth: [] }],
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
              operationId: 'operationId',
              tags: ['tag'],
              consumes: ['text/plain; charset=utf-8'],
              security: [{ bearerAuth: [] }],
              summary: 'Summary',
              body: {
                $id: 'auth',
                type: 'object',
                allOf: [
                  {
                    $id: 'obj1',
                    type: 'object',
                    properties: {
                      login: { type: 'string', description: 'User login' },
                      password: {
                        type: 'string',
                        pattern: 'qwerty',
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
                  properties: { status: { type: 'string' } },
                },
                '401': {
                  description: 'User not logged in',
                  type: 'object',
                  properties: { message: { type: 'string' } },
                },
              },
            },
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            responses: {
              '200': {
                content: {
                  '*/*': {
                    schema: {
                      description: 'Response description',
                      type: 'object',
                      properties: { status: { type: 'string' } },
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
                      properties: { message: { type: 'string' } },
                    },
                  },
                },
                description: 'User not logged in',
              },
            },
            summary: 'Summary',
            description: 'Description',
            tags: ['tag'],
            operationId: 'operationId',
            security: [{ bearerAuth: [] }],
            requestBody: {
              content: {
                'text/plain; charset=utf-8': {
                  schema: {
                    type: 'object',
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          login: { type: 'string', description: 'User login' },
                          password: {
                            type: 'string',
                            pattern: 'qwerty',
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
    test('generates valid body with default media types', async () => {
      const api = openapi({
        options: {},
        routes: [
          {
            logLevel: '',
            method: ['POST', 'PATCH'],
            path: '/api/ep',
            url: '/api/ep',
            prefix: '/api',
            schema: {
              body: {
                $id: 'auth',
                type: 'object',
                oneOf: [
                  {
                    $id: 'obj1',
                    type: 'object',
                    properties: {
                      login: { type: 'string', description: 'User login' },
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
                  properties: { status: { type: 'string' } },
                },
                '401': {
                  description: 'User not logged in',
                  type: 'object',
                  properties: { message: { type: 'string' } },
                },
              },
            },
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            responses: {
              '200': {
                content: {
                  '*/*': {
                    schema: {
                      description: 'Response description',
                      type: 'object',
                      properties: { status: { type: 'string' } },
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
                      properties: { message: { type: 'string' } },
                    },
                  },
                },
                description: 'User not logged in',
              },
            },
            requestBody: {
              content: {
                '*/*': {
                  schema: {
                    type: 'object',
                    oneOf: [
                      {
                        type: 'object',
                        properties: {
                          login: { type: 'string', description: 'User login' },
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
          patch: {
            responses: {
              '200': {
                content: {
                  '*/*': {
                    schema: {
                      description: 'Response description',
                      type: 'object',
                      properties: { status: { type: 'string' } },
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
                      properties: { message: { type: 'string' } },
                    },
                  },
                },
                description: 'User not logged in',
              },
            },
            requestBody: {
              content: {
                '*/*': {
                  schema: {
                    type: 'object',
                    oneOf: [
                      {
                        type: 'object',
                        properties: {
                          login: { type: 'string', description: 'User login' },
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
    test('skips hidden shcemas', async () => {
      const api = openapi({
        options: {
          hideUntagged: true,
        },
        routes: [
          {
            logLevel: '',
            method: 'POST',
            path: '/api/ep/:id',
            url: '/api/ep/:id',
            prefix: '/api',
            schema: {
              hide: true,
              description: 'Description',
              tags: ['tag'],
              consumes: ['text/plain; charset=utf-8'],
              security: [{ bearerAuth: [] }],
              summary: 'Summary',
              params: {
                type: 'object',
                properties: { id: { type: 'number', description: 'ID' } },
              },
            },
          },
          {
            logLevel: '',
            method: 'POST',
            path: '/api/untagged/:id',
            url: '/api/untagged/:id',
            prefix: '/api',
            schema: {
              description: 'Description',
              consumes: ['text/plain; charset=utf-8'],
              security: [{ bearerAuth: [] }],
              summary: 'Summary',
              params: {
                type: 'object',
                properties: { id: { type: 'number', description: 'ID' } },
              },
            },
          },
          {
            logLevel: '',
            method: 'POST',
            path: '/api/untagged2/:id',
            url: '/api/untagged2/:id',
            prefix: '/api',
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {});
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
                  scheme: 'bearer',
                  bearerFormat: 'JWT',
                },
              },
            },
            tags: [{ name: 'tag' }],
            externalDocs: {
              description: 'Find more info here',
              url: 'https://swagger.io',
            },
            security: [{ bearerAuth: [] }],
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
              description: 'Description',
              tags: ['tag'],
              consumes: ['text/plain; charset=utf-8'],
              security: [{ bearerAuth: [] }],
              summary: 'Summary',
              params: {
                type: 'object',
                properties: { id: { type: 'number', description: 'ID' } },
              },
            },
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep/{id}': {
          post: {
            responses: {
              '200': {
                description: 'Default Response',
              },
            },
            summary: 'Summary',
            description: 'Description',
            tags: ['tag'],
            security: [{ bearerAuth: [] }],
            parameters: [
              {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID',
                schema: { type: 'number', description: 'ID' },
              },
            ],
          },
        },
      });

      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('generates valid query', async () => {
      const api = openapi({
        options: {},
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
              security: [{ bearerAuth: [] }],
              summary: 'Summary',
              querystring: {
                type: 'object',
                properties: {
                  id: { type: 'number', description: 'ID' },
                  text: { type: 'string', pattern: '^[a-z0-9A-Z]{16,18}$' },
                },
              },
            },
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            responses: {
              '200': {
                description: 'Default Response',
              },
            },
            summary: 'Summary',
            description: 'Description',
            tags: ['tag'],
            security: [{ bearerAuth: [] }],
            parameters: [
              {
                name: 'id',
                in: 'query',
                description: 'ID',
                schema: { type: 'number', description: 'ID' },
              },
              {
                name: 'text',
                in: 'query',
                schema: { type: 'string', pattern: '^[a-z0-9A-Z]{16,18}$' },
              },
            ],
          },
        },
      });

      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('generates valid headers', async () => {
      const api = openapi({
        options: {},
        routes: [
          {
            logLevel: '',
            method: 'POST',
            path: '/api/ep',
            url: '/api/ep',
            prefix: '/api',
            schema: {
              consumes: ['text/plain; charset=utf-8'],
              deprecated: true,
              headers: {
                type: 'object',
                properties: { host: { type: 'string', description: 'Host' } },
              },
            },
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            deprecated: true,
            responses: {
              '200': {
                description: 'Default Response',
              },
            },
            parameters: [
              {
                name: 'host',
                in: 'header',
                description: 'Host',
                schema: { type: 'string', description: 'Host' },
              },
            ],
          },
        },
      });

      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('generates valid cookies', async () => {
      const api = openapi({
        options: {},
        routes: [
          {
            logLevel: '',
            method: 'POST',
            path: '/api/ep',
            url: '/api/ep',
            prefix: '/api',
            schema: {
              consumes: ['text/plain; charset=utf-8'],
              deprecated: true,
              cookies: {
                type: 'object',
                properties: { host: { type: 'string', description: 'Host' } },
              },
            },
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            deprecated: true,
            responses: {
              '200': {
                description: 'Default Response',
              },
            },
            parameters: [
              {
                name: 'host',
                in: 'cookie',
                description: 'Host',
                schema: { type: 'string', description: 'Host' },
              },
            ],
          },
        },
      });

      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    test('skips if no schema', async () => {
      const api = openapi({
        options: {},
        routes: [
          {
            logLevel: '',
            method: 'POST',
            path: '/api/ep',
            url: '/api/ep',
            prefix: '/api',
          },
        ],
      })();
      await expect(api).toHaveProperty('paths', {
        '/api/ep': {
          post: {
            responses: {
              '200': {
                description: 'default response',
              },
            },
          },
        },
      });

      await expect(swParser.validate(api)).resolves.toEqual(api);
    });
    describe('should substitute references', () => {
      const schemas = {
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
        sch2: {
          type: 'object',
          description: 'sch2 schema',
          properties: {
            num: {
              type: 'number',
              title: 'title',
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
            ref: {
              $ref: 'sch1#',
            },
          },
        },
      };
      const getSchema = (id) => schemas[id];
      test('in querystring', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                querystring: {
                  $ref: 'sch1#',
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              parameters: [
                {
                  description: schemas.sch1.properties.num.description,
                  in: 'query',
                  name: 'num',
                  schema: schemas.sch1.properties.num,
                },
                {
                  description: schemas.sch1.properties.str.description,
                  in: 'query',
                  name: 'str',
                  schema: schemas.sch1.properties.str,
                },
              ],
              responses: {
                '200': {
                  description: 'Default Response',
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in body', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                body: {
                  $ref: 'sch1#',
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              requestBody: {
                description: schemas.sch1.description,
                content: {
                  '*/*': {
                    schema: Object.assign({}, schemas.sch1, {
                      description: undefined,
                    }),
                  },
                },
              },
              responses: {
                '200': {
                  description: 'Default Response',
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in params', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                params: {
                  $ref: 'sch1#',
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              parameters: [
                {
                  description: schemas.sch1.properties.num.description,
                  in: 'path',
                  name: 'num',
                  required: true,
                  schema: schemas.sch1.properties.num,
                },
                {
                  description: schemas.sch1.properties.str.description,
                  in: 'path',
                  name: 'str',
                  required: true,
                  schema: schemas.sch1.properties.str,
                },
              ],
              responses: {
                '200': {
                  description: 'Default Response',
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in headers', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                headers: {
                  $ref: 'sch1#',
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              parameters: [
                {
                  description: schemas.sch1.properties.num.description,
                  in: 'header',
                  name: 'num',
                  schema: schemas.sch1.properties.num,
                },
                {
                  description: schemas.sch1.properties.str.description,
                  in: 'header',
                  name: 'str',
                  schema: schemas.sch1.properties.str,
                },
              ],
              responses: {
                '200': {
                  description: 'Default Response',
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in cookies', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                cookies: {
                  $ref: 'sch1#',
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              parameters: [
                {
                  description: schemas.sch1.properties.num.description,
                  in: 'cookie',
                  name: 'num',
                  schema: schemas.sch1.properties.num,
                },
                {
                  description: schemas.sch1.properties.str.description,
                  in: 'cookie',
                  name: 'str',
                  schema: schemas.sch1.properties.str,
                },
              ],
              responses: {
                '200': {
                  description: 'Default Response',
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in responses', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                response: {
                  200: {
                    $ref: 'sch1#',
                  },
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              responses: {
                '200': {
                  description: schemas.sch1.description,
                  content: {
                    '*/*': {
                      schema: schemas.sch1,
                    },
                  },
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in nested references', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                response: {
                  200: {
                    $ref: 'sch2#',
                  },
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              responses: {
                '200': {
                  description: schemas.sch2.description,
                  content: {
                    '*/*': {
                      schema: Object.assign({}, schemas.sch2, {
                        properties: Object.assign({}, schemas.sch2.properties, {
                          ref: schemas.sch1,
                        }),
                      }),
                    },
                  },
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in array of references', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                response: {
                  200: {
                    description: 'an array',
                    type: 'array',
                    items: {
                      $ref: 'sch1#',
                    },
                  },
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              responses: {
                '200': {
                  description: 'an array',
                  content: {
                    '*/*': {
                      schema: {
                        type: 'array',
                        description: 'an array',
                        items: schemas.sch1,
                      },
                    },
                  },
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in anyOf with references', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                response: {
                  200: {
                    description: 'any of',
                    type: 'object',
                    anyOf: [
                      {
                        type: 'object',
                        properties: {
                          inlineProp1: {
                            type: 'string',
                          },
                        },
                      },
                      {
                        $ref: 'sch1#',
                      },
                    ],
                  },
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              responses: {
                '200': {
                  description: 'any of',
                  content: {
                    '*/*': {
                      schema: {
                        description: 'any of',
                        type: 'object',
                        anyOf: [
                          {
                            type: 'object',
                            properties: {
                              inlineProp1: {
                                type: 'string',
                              },
                            },
                          },
                          schemas.sch1,
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
      test('in allOf with references', async () => {
        const api = openapi({
          options: {},
          getSchema,
          routes: [
            {
              logLevel: '',
              method: 'GET',
              path: '/api/ep',
              url: '/api/ep',
              prefix: '/api',
              schema: {
                response: {
                  200: {
                    description: 'all of',
                    type: 'object',
                    allOf: [
                      {
                        type: 'object',
                        properties: {
                          inlineProp1: {
                            type: 'string',
                          },
                        },
                      },
                      {
                        $ref: 'sch1#',
                      },
                    ],
                  },
                },
              },
            },
          ],
        })();
        expect(api).toHaveProperty('paths', {
          '/api/ep': {
            get: {
              responses: {
                '200': {
                  description: 'all of',
                  content: {
                    '*/*': {
                      schema: {
                        description: 'all of',
                        type: 'object',
                        allOf: [
                          {
                            type: 'object',
                            properties: {
                              inlineProp1: {
                                type: 'string',
                              },
                            },
                          },
                          schemas.sch1,
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        });

        await expect(swParser.validate(api)).resolves.toEqual(api);
      });
    });
  });
});
