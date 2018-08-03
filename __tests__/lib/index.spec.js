/// <reference types="node" />
/// <reference types="jest" />

const fastify = require('fastify');
const oasPlugin = require('../../lib');

describe('plugin', () => {
  test('fastify registers plugin', async () => {
    const app = fastify();
    app.register(oasPlugin);
    await app.ready();
    expect(app).toHaveProperty('oas');
  });
});
