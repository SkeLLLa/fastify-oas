**[fastify-oas](../README.md)**

> [Globals](../README.md) / [fastifyOAS](../modules/fastifyoas.md) / FastifyOASOptions

# Interface: FastifyOASOptions

Fastify OAS plugin options

## Hierarchy

* RegisterOptions

  ↳ **FastifyOASOptions**

## Index

### Properties

* [addModels](fastifyoas.fastifyoasoptions.md#addmodels)
* [exposeRoute](fastifyoas.fastifyoasoptions.md#exposeroute)
* [hideUntagged](fastifyoas.fastifyoasoptions.md#hideuntagged)
* [logLevel](fastifyoas.fastifyoasoptions.md#loglevel)
* [logSerializers](fastifyoas.fastifyoasoptions.md#logserializers)
* [openapi](fastifyoas.fastifyoasoptions.md#openapi)
* [prefix](fastifyoas.fastifyoasoptions.md#prefix)
* [routePrefix](fastifyoas.fastifyoasoptions.md#routeprefix)
* [swagger](fastifyoas.fastifyoasoptions.md#swagger)
* [yaml](fastifyoas.fastifyoasoptions.md#yaml)

## Properties

### addModels

• `Optional` **addModels**: boolean

*Defined in lib/index.d.ts:118*

If `true` adds fastify schemas as openapi models

**`default`** false

___

### exposeRoute

• `Optional` **exposeRoute**: boolean \| [ExposeOptions](fastifyoas.exposeoptions.md)

*Defined in lib/index.d.ts:113*

If `true` the plugin will expose the documentation routes

**`default`** false

___

### hideUntagged

• `Optional` **hideUntagged**: boolean

*Defined in lib/index.d.ts:137*

If true will not add routes without tags

**`default`** false

___

### logLevel

• `Optional` **logLevel**: LogLevel

*Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[logLevel](fastifyoas.fastifyoasoptions.md#loglevel)*

*Defined in node_modules/fastify/types/register.d.ts:6*

___

### logSerializers

• `Optional` **logSerializers**: Record\<string, (value: any) => string>

*Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[logSerializers](fastifyoas.fastifyoasoptions.md#logserializers)*

*Defined in node_modules/fastify/types/register.d.ts:7*

___

### openapi

• `Optional` **openapi**: string

*Defined in lib/index.d.ts:123*

Openapi version

**`default`** 3.0.0

___

### prefix

• `Optional` **prefix**: string

*Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[prefix](fastifyoas.fastifyoasoptions.md#prefix)*

*Defined in node_modules/fastify/types/register.d.ts:5*

___

### routePrefix

• `Optional` **routePrefix**: string

*Defined in lib/index.d.ts:108*

Documentation endpoint

**`default`** /documentation

___

### swagger

• `Optional` **swagger**: [OpenApiSpec](fastifyoas.openapispec.md)

*Defined in lib/index.d.ts:132*

OpenApi/Swagger object except paths

___

### yaml

• `Optional` **yaml**: boolean

*Defined in lib/index.d.ts:128*

If `true` returns yaml instead of json

**`default`** false
