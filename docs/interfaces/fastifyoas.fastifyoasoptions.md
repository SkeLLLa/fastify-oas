[fastify-oas](../README.md) › [fastifyOAS](../modules/fastifyoas.md) › [FastifyOASOptions](fastifyoas.fastifyoasoptions.md)

# Interface: FastifyOASOptions

Fastify OAS plugin options

## Hierarchy

* RegisterOptions‹Server, IncomingMessage, ServerResponse›

  ↳ **FastifyOASOptions**

## Indexable

* \[ **key**: *string*\]: any

Fastify OAS plugin options

## Index

### Properties

* [addModels](fastifyoas.fastifyoasoptions.md#optional-addmodels)
* [exposeRoute](fastifyoas.fastifyoasoptions.md#optional-exposeroute)
* [hideUntagged](fastifyoas.fastifyoasoptions.md#optional-hideuntagged)
* [logSerializers](fastifyoas.fastifyoasoptions.md#optional-logserializers)
* [openapi](fastifyoas.fastifyoasoptions.md#optional-openapi)
* [prefix](fastifyoas.fastifyoasoptions.md#optional-prefix)
* [routePrefix](fastifyoas.fastifyoasoptions.md#optional-routeprefix)
* [swagger](fastifyoas.fastifyoasoptions.md#optional-swagger)
* [yaml](fastifyoas.fastifyoasoptions.md#optional-yaml)

## Properties

### `Optional` addModels

• **addModels**? : *boolean*

Defined in lib/index.d.ts:109

If `true` adds fastify schemas as openapi models

**`default`** false

___

### `Optional` exposeRoute

• **exposeRoute**? : *boolean*

Defined in lib/index.d.ts:104

If `true` the plugin will expose the documentation routes

**`default`** false

___

### `Optional` hideUntagged

• **hideUntagged**? : *boolean*

Defined in lib/index.d.ts:128

If true will not add routes without tags

**`default`** false

___

### `Optional` logSerializers

• **logSerializers**? : *Object*

*Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[logSerializers](fastifyoas.fastifyoasoptions.md#optional-logserializers)*

Defined in node_modules/fastify/fastify.d.ts:322

___

### `Optional` openapi

• **openapi**? : *string*

Defined in lib/index.d.ts:114

Openapi version

**`default`** 3.0.0

___

### `Optional` prefix

• **prefix**? : *string*

*Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[prefix](fastifyoas.fastifyoasoptions.md#optional-prefix)*

Defined in node_modules/fastify/fastify.d.ts:321

___

### `Optional` routePrefix

• **routePrefix**? : *string*

Defined in lib/index.d.ts:99

Documentation endpoint

**`default`** /documentation

___

### `Optional` swagger

• **swagger**? : *[OpenApiSpec](fastifyoas.openapispec.md)*

Defined in lib/index.d.ts:123

OpenApi/Swagger object except paths

___

### `Optional` yaml

• **yaml**? : *boolean*

Defined in lib/index.d.ts:119

If `true` returns yaml instead of json

**`default`** false
