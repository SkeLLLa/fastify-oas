/// <reference types="node" />
/// <reference types="jest" />

const openapi = require('../../../lib/openapi');
const fastify = require('fastify').default;

describe('openapi fastify plugin', () => {
  test('registers plugin', async () => {
    const app = fastify();
    openapi(app, { exposeRoute: true });
    expect(app).toHaveProperty('oas');
    expect(app.oas).toBeInstanceOf(Function);
  });

  test('registers plugin with default options', async () => {
    const app = fastify();
    openapi(app);
    app.get(
      '/',
      {
        schema: {
          description: `Get root`,
        },
      },
      async function () {
        return { hello: 'world' };
      }
    );
    await app.ready();
    expect(app).toHaveProperty('oas');
    expect(app.oas).toBeInstanceOf(Function);
  });
});
