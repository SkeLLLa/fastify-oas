/// <reference types="node" />
/// <reference types="jest" />

const fastify = require('fastify');
const oasPlugin = require('../../lib');

describe('plugin', async () => {
  const app = fastify();
  app.register(oasPlugin, {exposeRoute: true});
  // await app.ready();
  test('redirects to documentation index', (done) => {
    app.inject(
      {
        method: 'GET',
        url: '/documentation',
      },
      (err, res) => {
        expect(res.statusCode).toEqual(302);
        expect(res.headers['location']).toEqual('/documentation/index.html');
        expect(typeof res.payload).toBe('string');
        done();
      }
    );
  });
  test('returns documentation', (done) => {
    app.inject(
      {
        method: 'GET',
        url: '/documentation/index.html',
      },
      (err, res) => {
        expect(err).toBeFalsy();
        expect(res.statusCode).toEqual(200);
        expect(res.payload).toBeDefined();
        done();
      }
    );
  });

  test('returns json spec', (done) => {
    app.inject(
      {
        method: 'GET',
        url: '/documentation/json',
      },
      (err, res) => {
        expect(err).toBeFalsy();
        expect(res.statusCode).toEqual(200);
        expect(res.payload).toBeDefined();
        done();
      }
    );
  });

  test('returns yaml spec', (done) => {
    app.inject(
      {
        method: 'GET',
        url: '/documentation/yaml',
      },
      (err, res) => {
        expect(err).toBeFalsy();
        expect(res.statusCode).toEqual(200);
        expect(res.payload).toBeDefined();
        done();
      }
    );
  });
});
