/// <reference types="node" />
/// <reference types="jest" />

const helpers = require('../../lib/helpers');

describe('helpers', () => {
  describe('clone', () => {
    test('clones object', () => {
      const src = {a: 1, b: {c: 1}};
      const clone = helpers.clone(src);
      expect(src).toEqual(clone);
    });

    test('clones without references', () => {
      const src = {a: 1, b: {c: 1}};
      const clone = helpers.clone(src);
      clone.b.c = 2;
      expect(src.b.c).toEqual(1);
      expect(clone.b.c).toEqual(2);
    });
  });

  describe('genBody', () => {
    test('generates valid body', () => {
      const body = {
        type: 'object',
        description: 'lalala',
        example: {
          a: 'a',
          b: 'C',
          c: 1,
        },
        properties: {
          a: {type: 'string', description: 'A value'},
          b: {
            type: 'string',
            enum: ['C', 'D'],
            default: 'C',
          },
          c: {
            type: 'number',
            minimum: 0,
            maximum: 100,
          },
        },
      };
      const dst = {};
      const expected = {
        description: 'lalala',
        content: {
          'application/json': {
            example: {
              a: 'a',
              b: 'C',
              c: 1,
            },
            schema: {
              type: 'object',
              properties: {
                a: {type: 'string', description: 'A value'},
                b: {type: 'string', enum: ['C', 'D'], default: 'C'},
                c: {type: 'number', minimum: 0, maximum: 100},
              },
            },
          },
        },
      };
      helpers.genBody(dst, body, ['application/json']);
      expect(dst).toEqual(expected);
    });
    test('generates valid body with complex types', () => {
      const dst = {};
      const body = {
        type: 'object',
        required: true,
        somestuff: 'todo: delete',
        allOf: [
          {
            type: 'object',
            properties: {
              second: {
                min: 0,
                type: 'number',
              },
            },
          },
          {
            type: 'object',
            properties: {
              first: {
                max: 100,
                type: 'number',
              },
            },
          },
        ],
      };
      helpers.genBody(dst, body, ['application/json']);
    });
  });

  describe('genHeaders', () => {
    test('generates valid headers', () => {
      const dst = [];
      const expected = [
        {
          description: 'optional api token',
          in: 'header',
          name: 'x-api-token',
          required: true,
          schema: {description: 'optional api token', type: 'string'},
        },
        {
          description: 'optional api version',
          in: 'header',
          name: 'x-api-version',
          required: false,
          schema: {
            description: 'optional api version',
            type: 'string',
          },
        },
      ];
      const headers = {
        type: 'object',
        required: ['x-api-token'],
        properties: {
          'x-api-token': {
            type: 'string',
            description: 'optional api token',
          },
          'x-api-version': {
            type: 'string',
            description: 'optional api version',
          },
        },
      };
      helpers.genHeaders(dst, headers);
      expect(dst).toEqual(expected);
    });
  });

  describe('genQuery', () => {
    test('generates valid query', () => {
      const querystring = {
        type: 'object',
        properties: {
          hello: {type: 'string'},
          world: {type: 'string', enum: ['world', 'worlds'], description: 'something'},
        },
        required: ['hello'],
      };
      const dst = [];
      const expected = [
        {in: 'query', name: 'hello', required: true, schema: {type: 'string'}},
        {
          in: 'query',
          name: 'world',
          description: 'something',
          schema: {type: 'string', enum: ['world', 'worlds'], description: 'something'},
        },
      ];
      helpers.genQuery(dst, querystring);
      expect(dst).toEqual(expected);
    });
    test('generates valid query from shorthand', () => {
      const querystring = {
        hello: {type: 'string', required: true},
        world: {type: 'string', description: 'something'},
      };
      const dst = [];
      const expected = [
        {in: 'query', name: 'hello', required: true, schema: {type: 'string'}},
        {
          in: 'query',
          name: 'world',
          description: 'something',
          schema: {type: 'string', description: 'something'},
        },
      ];
      helpers.genQuery(dst, querystring);
      expect(dst).toEqual(expected);
    });
  });

  describe('genPath', () => {
    test('generates valid path params', () => {
      const dst = [];
      const expected = [
        {
          description: 'user id',
          in: 'path',
          name: 'id',
          required: true,
          schema: {description: 'user id', type: 'string'},
        },
      ];
      const params = {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'user id',
          },
        },
      };
      helpers.genPath(dst, params);
      expect(dst).toEqual(expected);
    });
  });

  describe('genResponse', () => {
    test('generates default response', () => {
      const dst = {};
      const expected = {
        200: {description: 'Default Response'},
      };
      helpers.genResponse(dst);
      expect(dst).toEqual(expected);
    });

    test('generates valid response', () => {
      const dst = {};
      const response = {
        200: {
          type: 'object',
          headers: {
            'X-Powered-By': {
              description: 'header',
              schema: {
                type: 'string',
              },
            },
          },
          properties: {
            hello: {type: 'string'},
          },
        },
        500: {
          links: ['https://example.com'],
          description: 'Some error',
        },
      };

      const expected = {
        '200': {
          headers: {
            'X-Powered-By': {
              description: 'header',
              schema: {
                type: 'string',
              },
            },
          },
          content: {
            '*/*': {
              schema: {properties: {hello: {type: 'string'}}, type: 'object'},
            },
          },
        },
        '500': {
          links: ['https://example.com'],
          description: 'Some error',
        },
      };
      helpers.genResponse(dst, response);
      expect(dst).toEqual(expected);
    });
  });

  describe('formatParamUrl', () => {
    test('with path params', () => {
      const expected = '/abc/{id}/{name}';
      const formatted = helpers.formatParamUrl('/abc/:id/:name');
      expect(formatted).toBe(expected);
    });

    test('without path params', () => {
      const expected = '/abc/id/name';
      const formatted = helpers.formatParamUrl('/abc/id/name');
      expect(formatted).toBe(expected);
    });
  });
});
