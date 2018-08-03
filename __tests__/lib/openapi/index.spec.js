/// <reference types="node" />
/// <reference types="jest" />

const openapi = require('../../../lib/openapi');
const fastify = require('fastify');

describe('openapi fastify plugin', async () => {
  test('registers plugin', async () => {
    const app = fastify();
    openapi(app, {exposeRoute: true});
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
      async function(request, reply) {
        return {hello: 'world'};
      }
    );
    await app.ready();
    expect(app).toHaveProperty('oas');
    expect(app.oas).toBeInstanceOf(Function);
  });
});
