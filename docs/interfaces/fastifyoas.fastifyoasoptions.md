[fastify-oas](../README.md) > [fastifyOAS](../modules/fastifyoas.md) > [FastifyOASOptions](../interfaces/fastifyoas.fastifyoasoptions.md)

# Interface: FastifyOASOptions

Fastify OAS plugin options

## Hierarchy

 `RegisterOptions`<`Server`, `IncomingMessage`, `ServerResponse`>

**↳ FastifyOASOptions**

## Indexable

\[key: `string`\]:&nbsp;`any`
Fastify OAS plugin options

## Index

### Properties

* [addModels](fastifyoas.fastifyoasoptions.md#addmodels)
* [exposeRoute](fastifyoas.fastifyoasoptions.md#exposeroute)
* [hideUntagged](fastifyoas.fastifyoasoptions.md#hideuntagged)
* [openapi](fastifyoas.fastifyoasoptions.md#openapi)
* [prefix](fastifyoas.fastifyoasoptions.md#prefix)
* [routePrefix](fastifyoas.fastifyoasoptions.md#routeprefix)
* [swagger](fastifyoas.fastifyoasoptions.md#swagger)
* [yaml](fastifyoas.fastifyoasoptions.md#yaml)

---

## Properties

<a id="addmodels"></a>

### `<Optional>` addModels

**● addModels**: *`Boolean`*

*Defined in lib/index.d.ts:109*

If `true` adds fastify schemas as openapi models

*__default__*: false

___
<a id="exposeroute"></a>

### `<Optional>` exposeRoute

**● exposeRoute**: *`Boolean`*

*Defined in lib/index.d.ts:104*

If `true` the plugin will expose the documentation routes

*__default__*: false

___
<a id="hideuntagged"></a>

### `<Optional>` hideUntagged

**● hideUntagged**: *`Boolean`*

*Defined in lib/index.d.ts:128*

If true will not add routes without tags

*__default__*: false

___
<a id="openapi"></a>

### `<Optional>` openapi

**● openapi**: *`String`*

*Defined in lib/index.d.ts:114*

Openapi version

*__default__*: 3.0.0

___
<a id="prefix"></a>

### `<Optional>` prefix

**● prefix**: *`string`*

*Inherited from RegisterOptions.prefix*

*Defined in node_modules/fastify/fastify.d.ts:287*

___
<a id="routeprefix"></a>

### `<Optional>` routePrefix

**● routePrefix**: *`String`*

*Defined in lib/index.d.ts:99*

Documentation endpoint

*__default__*: /documentation

___
<a id="swagger"></a>

### `<Optional>` swagger

**● swagger**: *[OpenApiSpec](fastifyoas.openapispec.md)*

*Defined in lib/index.d.ts:123*

OpenApi/Swagger object except paths

___
<a id="yaml"></a>

### `<Optional>` yaml

**● yaml**: *`Boolean`*

*Defined in lib/index.d.ts:119*

If `true` returns yaml instead of json

*__default__*: false

___

