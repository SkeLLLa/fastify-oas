[fastify-oas](../README.md) > [fastifyOAS](../modules/fastifyoas.md) > [FastifyOASOptions](../interfaces/fastifyoas.fastifyoasoptions.md)

# Interface: FastifyOASOptions

Fastify OAS plugin options

## Hierarchy

**FastifyOASOptions**

## Index

### Properties

* [addModels](fastifyoas.fastifyoasoptions.md#addmodels)
* [exposeRoute](fastifyoas.fastifyoasoptions.md#exposeroute)
* [openapi](fastifyoas.fastifyoasoptions.md#openapi)
* [routePrefix](fastifyoas.fastifyoasoptions.md#routeprefix)
* [swagger](fastifyoas.fastifyoasoptions.md#swagger)
* [yaml](fastifyoas.fastifyoasoptions.md#yaml)

---

## Properties

<a id="addmodels"></a>

###  addModels

**● addModels**: *`Boolean`*

*Defined in lib/index.d.ts:90*

If `true` adds fastify schemas as openapi models
*__default__*: false

___
<a id="exposeroute"></a>

###  exposeRoute

**● exposeRoute**: *`Boolean`*

*Defined in lib/index.d.ts:85*

If `true` the plugin will expose the documentation routes
*__default__*: false

___
<a id="openapi"></a>

###  openapi

**● openapi**: *`String`*

*Defined in lib/index.d.ts:95*

Openapi version
*__default__*: 3.0.0

___
<a id="routeprefix"></a>

###  routePrefix

**● routePrefix**: *`String`*

*Defined in lib/index.d.ts:80*

Documentation endpoint
*__default__*: /documentation

___
<a id="swagger"></a>

###  swagger

**● swagger**: *[OpenApiSpec](fastifyoas.openapispec.md)*

*Defined in lib/index.d.ts:104*

OpenApi/Swagger object except paths

___
<a id="yaml"></a>

###  yaml

**● yaml**: *`Boolean`*

*Defined in lib/index.d.ts:100*

If `true` returns yaml instead of json
*__default__*: false

___

