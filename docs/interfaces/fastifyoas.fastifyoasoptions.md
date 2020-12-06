**[fastify-oas](../README.md)**

> [Globals](../README.md) / [fastifyOAS](../modules/fastifyoas.md) / FastifyOASOptions

# Interface: FastifyOASOptions

Fastify OAS plugin options

## Hierarchy

- RegisterOptions

  ↳ **FastifyOASOptions**

## Index

### Properties

- [addModels](fastifyoas.fastifyoasoptions.md#addmodels)
- [exposeRoute](fastifyoas.fastifyoasoptions.md#exposeroute)
- [hideUntagged](fastifyoas.fastifyoasoptions.md#hideuntagged)
- [logLevel](fastifyoas.fastifyoasoptions.md#loglevel)
- [logSerializers](fastifyoas.fastifyoasoptions.md#logserializers)
- [openapi](fastifyoas.fastifyoasoptions.md#openapi)
- [prefix](fastifyoas.fastifyoasoptions.md#prefix)
- [routePrefix](fastifyoas.fastifyoasoptions.md#routeprefix)
- [swagger](fastifyoas.fastifyoasoptions.md#swagger)
- [yaml](fastifyoas.fastifyoasoptions.md#yaml)

## Properties

### addModels

• `Optional` **addModels**: boolean

_Defined in lib/index.d.ts:118_

If `true` adds fastify schemas as openapi models

**`default`** false

---

### exposeRoute

• `Optional` **exposeRoute**: boolean \| [ExposeOptions](fastifyoas.exposeoptions.md)

_Defined in lib/index.d.ts:113_

If `true` the plugin will expose the documentation routes

**`default`** false

---

### hideUntagged

• `Optional` **hideUntagged**: boolean

_Defined in lib/index.d.ts:137_

If true will not add routes without tags

**`default`** false

---

### logLevel

• `Optional` **logLevel**: LogLevel

_Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[logLevel](fastifyoas.fastifyoasoptions.md#loglevel)_

_Defined in node_modules/fastify/types/register.d.ts:6_

---

### logSerializers

• `Optional` **logSerializers**: Record\<string, (value: any) => string>

_Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[logSerializers](fastifyoas.fastifyoasoptions.md#logserializers)_

_Defined in node_modules/fastify/types/register.d.ts:7_

---

### openapi

• `Optional` **openapi**: string

_Defined in lib/index.d.ts:123_

Openapi version

**`default`** 3.0.0

---

### prefix

• `Optional` **prefix**: string

_Inherited from [FastifyOASOptions](fastifyoas.fastifyoasoptions.md).[prefix](fastifyoas.fastifyoasoptions.md#prefix)_

_Defined in node_modules/fastify/types/register.d.ts:5_

---

### routePrefix

• `Optional` **routePrefix**: string

_Defined in lib/index.d.ts:108_

Documentation endpoint

**`default`** /documentation

---

### swagger

• `Optional` **swagger**: [OpenApiSpec](fastifyoas.openapispec.md)

_Defined in lib/index.d.ts:132_

OpenApi/Swagger object except paths

---

### yaml

• `Optional` **yaml**: boolean

_Defined in lib/index.d.ts:128_

If `true` returns yaml instead of json

**`default`** false
