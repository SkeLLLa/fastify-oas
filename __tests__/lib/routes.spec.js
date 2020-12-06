/// <reference types="node" />
/// <reference types="jest" />

const fastify = require('fastify');
const oasPlugin = require('../../lib');

describe('plugin', () => {
  test('redirects to documentation index', (done) => {
    const app = fastify();
    app.register(oasPlugin, { exposeRoute: true });
    app.ready().then(() => {
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
  });
  // temporary disable due to graceful-fs bug
  test.skip('returns documentation', (done) => {
    const app = fastify();
    app.register(oasPlugin, { exposeRoute: true });
    app.ready().then(() => {
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
  });

  test('returns json spec', (done) => {
    const app = fastify();
    app.register(oasPlugin, { exposeRoute: true });
    app.ready().then(() => {
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
  });

  test('returns yaml spec', (done) => {
    const app = fastify();
    app.register(oasPlugin, { exposeRoute: true });
    app.ready().then(() => {
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

  test('respext extended route options', (done) => {
    const app = fastify();
    app.register(oasPlugin, {
      exposeRoute: {
        ui: false,
        json: false,
        yaml: false,
      },
    });
    app.ready().then(() => {
      app.inject(
        {
          method: 'GET',
          url: '/documentation/yaml',
        },
        (err, res) => {
          expect(err).toBeFalsy();
          expect(res.statusCode).toEqual(404);
          done();
        }
      );
    });
  });
});
