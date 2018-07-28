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
        description: 'lalala',
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
});
