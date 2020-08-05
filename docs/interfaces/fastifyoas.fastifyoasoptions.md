[fastify-oas](../README.md) › [fastifyOAS](../modules/fastifyoas.md) › [FastifyOASOptions](fastifyoas.fastifyoasoptions.md)

# Interface: FastifyOASOptions

Fastify OAS plugin options

## Hierarchy

- RegisterOptions

  ↳ **FastifyOASOptions**

## Index

### Properties

- [addModels](fastifyoas.fastifyoasoptions.md#optional-addmodels)
- [exposeRoute](fastifyoas.fastifyoasoptions.md#optional-exposeroute)
- [hideUntagged](fastifyoas.fastifyoasoptions.md#optional-hideuntagged)
- [logLevel](fastifyoas.fastifyoasoptions.md#optional-loglevel)
- [openapi](fastifyoas.fastifyoasoptions.md#optional-openapi)
- [prefix](fastifyoas.fastifyoasoptions.md#optional-prefix)
- [routePrefix](fastifyoas.fastifyoasoptions.md#optional-routeprefix)
- [swagger](fastifyoas.fastifyoasoptions.md#optional-swagger)
- [yaml](fastifyoas.fastifyoasoptions.md#optional-yaml)

## Properties

### `Optional` addModels

• **addModels**? : _boolean_

Defined in lib/index.d.ts:118

If `true` adds fastify schemas as openapi models

**`default`** false

---

### `Optional` exposeRoute

• **exposeRoute**? : _boolean | [ExposeOptions](fastifyoas.exposeoptions.md)_

Defined in lib/index.d.ts:113

If `true` the plugin will expose the documentation routes

**`default`** false

---

### `Optional` hideUntagged

• **hideUntagged**? : _boolean_

Defined in lib/index.d.ts:137

If true will not add routes without tags

**`default`** false

---

### `Optional` logLevel

• **logLevel**? : _LogLevel_

_Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[logLevel](fastifyoas.fastifyoasoptions.md#optional-loglevel)_

Defined in node_modules/fastify/types/register.d.ts:28

---

### `Optional` openapi

• **openapi**? : _string_

Defined in lib/index.d.ts:123

Openapi version

**`default`** 3.0.0

---

### `Optional` prefix

• **prefix**? : _string_

_Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[prefix](fastifyoas.fastifyoasoptions.md#optional-prefix)_

Defined in node_modules/fastify/types/register.d.ts:27

---

### `Optional` routePrefix

• **routePrefix**? : _string_

Defined in lib/index.d.ts:108

Documentation endpoint

**`default`** /documentation

---

### `Optional` swagger

• **swagger**? : _[OpenApiSpec](fastifyoas.openapispec.md)_

Defined in lib/index.d.ts:132

OpenApi/Swagger object except paths

---

### `Optional` yaml

• **yaml**? : _boolean_

Defined in lib/index.d.ts:128

If `true` returns yaml instead of json

**`default`** false
