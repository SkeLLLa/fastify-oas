# fastify-oas

<div align="center">
  <img src="https://gitlab.com/m03geek/fastify-oas/raw/master/logo.png" alt="fastify-oas logo"/>
</div>

[![NPM Version](https://img.shields.io/npm/v/fastify-oas.svg)](https://www.npmjs.com/package/fastify-oas)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-oas.svg)](https://www.npmjs.com/package/fastify-oas)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-oas/badge.svg)](https://www.npmjs.com/package/fastify-oas)
[![Build Status](https://gitlab.com/m03geek/fastify-oas/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-oas/commits/master)
[![Coverage Status](https://gitlab.com/m03geek/fastify-oas/badges/master/coverage.svg)](https://gitlab.com/m03geek/fastify-oas/commits/master)
[![License](https://img.shields.io/npm/l/fastify-oas.svg)](https://gitlab.com/m03geek/fastify-oas/blob/master/LICENSE)

[OpenAPI 3.0+ (OAS3)](https://swagger.io/docs/specification/about/) documentation generator for Fastify.
It uses the schemas you declare in your routes to generate an OpenAPI (swagger) compliant doc.

This plugin based on [fastify-swagger](https://github.com/fastify/fastify-swagger/) that generates swagger 2.0 docs.

This plugin designed in such way to be compatible with it's predcessor and in most cases if you already use `fastify-swagger` you may just replace it with current plugin and it should work.

## ToC
- [fastify-oas](#fastify-oas)
  - [ToC](#toc)
  - [Fastify support](#fastify-support)
  - [Installation](#installation)
  - [Features and requirements](#features-and-requirements)
  - [Usage](#usage)
    - [Docs](#docs)
    - [Plugin options](#plugin-options)
    - [Additional schema options](#additional-schema-options)
    - [OpenAPI](#openapi)
    - [Swagger 2.0](#swagger-20)
  - [UI](#ui)
  - [Development](#development)
  - [See also](#see-also)
  - [License](#license)

## Fastify support

- v0.X.X - v1.X.X - supports fastify v1.X.X
- v2.X.X - will support fastify v2.X.X

## Installation

```sh
npm i fastify-oas --save
```

<sub>[Back to top](#toc)</sub>

## Features and requirements

* Supports OpenAPI 3+.
* Supports [fastify-swagger](https://github.com/fastify/fastify-swagger/) module configs.
* Supports swagger 2.0 fastify schemas.
* Supports fastify named schemas convertion to swaagger/openapi models.

--- 

* Requires fastify `>=1.9.0`.
* Node.js `>=8.9.0`.

NOTE: If you need to generate fastify routes from your swagger document - please refer to plugins in [See also](#see-also) like fastify-swaggergen or fastify-openapi-glue.

<sub>[Back to top](#toc)</sub>

## Usage

Add it to your project like regular fastify plugin. Use `register` method and pass it swagger options, then call the api constructor.

```js
const fastify = require('fastify');
const oas = require('fastify-oas');
const app = fastify();

app.register(oas, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Test openapi',
      description: 'testing the fastify swagger api',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    consumes: ['application/json'],
    produces: ['application/json'],
  },
});

// put some routes and schemas

app.ready(err => {
  if (err) throw err;
  app.oas();
});
```

<sub>[Back to top](#toc)</sub>

### Docs

See [Docs](/docs/README.md) for more details. 

### Plugin options

| parameter      | type    | description                                                                                                                                | default          |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `routePrefix`  | String  | Documentation endpoint                                                                                                                     | `/documentation` |
| `exposeRoute`  | Boolean | If `true` the plugin will expose the documentation with the following apis: `/<routePrefix>`, `/<routePrefix>/json`, `/<routePrefix>/yaml` | `false`          |
| `addModels`    | Boolean | If `true` adds fastify schemas as openapi models*                                                                                          | `false`          |
| `openapi`      | String  | Openapi version                                                                                                                            | '3.0.0'          |
| `yaml`         | Boolean | If `true` returns yaml instead of json                                                                                                     | `false`          |
| `hideUntagged` | Boolean | If `true` remove routes without tags in schema from resulting swagger file                                                                 | `false`          |
| `swagger`      | Object  | Swagger object except paths                                                                                                                | `{}`             |

Note (*): Fastify-oas plugin gather all schemas, so you should ensure that all of them under current and nested scopes have unique names.

<sub>[Back to top](#toc)</sub>

### Additional schema options

In order to remove some endpoints from Swagger/OpenAPI document you may add `{hide: true}` option to route schema.

```js
const fastify = require('fastify')()
fastify.get('/some-secrete-route/:id', {
  schema: {
    hide: true,
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'user id'
        }
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    },
  }
}, (req, reply) => {})

```

<sub>[Back to top](#toc)</sub>

### OpenAPI

Unlike regular OpenAPI spec you'll still need some options from swagger 2.0.

```js
const fastify = require('fastify');
const oas = require('fastify-oas');
const app = fastify();

app.register(oas, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Test openapi',
      description: 'testing the fastify swagger api',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    consumes: ['application/json'], // app-wide default media-type
    produces: ['application/json'], // app-wide default media-type
    servers: [{
      url: 'http://api.example.com/v1',
      description: 'Optional server description, e.g. Main (production) server',
    }],
    components: {
      // see https://github.com/OAI/OpenAPI-Specification/blob/OpenAPI.next/versions/3.0.0.md#componentsObject for more options
      securitySchemes: {
        BasicAuth: {
          type: 'http',
          scheme: 'basic',
        },
      },
    }, 
  },
});
```

<sub>[Back to top](#toc)</sub>

### Swagger 2.0

This will not generate swagger 2.0 docs. It will generate openapi 3.0 docs, but from swagger 2.0 (and fastify-swagger) compatible configuration.
It will allow easily migrate from fastify-swagger.

The example below is taken from fastify-swagger repo to show the differences .

```js
const fastify = require('fastify')()

// before: fastify.register(require('fastify-swagger'), {
fastify.register(require('fastify-oas'), { // after
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'user', description: 'User related end-points' },
      { name: 'code', description: 'Code related end-points' }
    ],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header'
      }
    }
  }
})

fastify.put('/some-route/:id', {
  schema: {
    description: 'post some data',
    tags: ['user', 'code'],
    summary: 'qwerty',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'user id'
        }
      }
    },
    body: {
      type: 'object',
      properties: {
        hello: { type: 'string' },
        obj: {
          type: 'object',
          properties: {
            some: { type: 'string' }
          }
        }
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    },
    security: [
      {
        "api_key": []
      }
    ]
  }
}, (req, reply) => {})

fastify.ready(err => {
  if (err) throw err
  fastify.oas()
})
```

<sub>[Back to top](#toc)</sub>

## UI

Swagger UI is available via `/<routePrefix>/index.html`. By default it's `/documentation/index.html`.

ReDoc UI is available via `/<routePrefix>/docs.html`. By default it's `/documentation/docs.html`.

<sub>[Back to top](#toc)</sub>

## Development

In order to start development run:

```sh
npm i
npm run prepare
```

So that [swagger-ui](https://github.com/swagger-api/swagger-ui) static folder will be generated for you.

<sub>[Back to top](#toc)</sub>

## See also

* [fastify-swagger](https://github.com/fastify/fastify-swagger) - swagger 2.0 docs generation plugin.
* [fastify-swaggergen](https://github.com/seriousme/fastify-swaggergen) - fastify routes generation from swagger 2.0 docs.
* [fastify-openapi-glue](https://github.com/seriousme/fastify-openapi-glue) - fastify-swaggergen successor, generates fastify routes from swagger 2.0 and openapi 3.0 docs (just like this module, but in opposite direction).

<sub>[Back to top](#toc)</sub>

## License

Licensed under [MIT](./LICENSE).

<sub>[Back to top](#toc)</sub>
