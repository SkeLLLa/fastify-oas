**[fastify-oas](../README.md)**

> [Globals](../README.md) / ["fastify"](../modules/_fastify_.md) / RouteSchema

# Interface: RouteSchema

## Hierarchy

* **RouteSchema**

## Index

### Properties

* [consumes](_fastify_.routeschema.md#consumes)
* [description](_fastify_.routeschema.md#description)
* [hide](_fastify_.routeschema.md#hide)
* [operationId](_fastify_.routeschema.md#operationid)
* [produces](_fastify_.routeschema.md#produces)
* [security](_fastify_.routeschema.md#security)
* [summary](_fastify_.routeschema.md#summary)
* [tags](_fastify_.routeschema.md#tags)

## Properties

### consumes

• `Optional` **consumes**: Array\<string>

*Defined in lib/index.d.ts:45*

Media types route consumes

___

### description

• `Optional` **description**: string

*Defined in lib/index.d.ts:33*

Route description

___

### hide

• `Optional` **hide**: boolean

*Defined in lib/index.d.ts:29*

Hides route from result OpenAPI document

**`default`** false

___

### operationId

• `Optional` **operationId**: string

*Defined in lib/index.d.ts:57*

OpenAPI operation unique identifier

___

### produces

• `Optional` **produces**: Array\<string>

*Defined in lib/index.d.ts:49*

Media types route produces

___

### security

• `Optional` **security**: Array\<[SecurityRequirementObject](securityrequirementobject.md)>

*Defined in lib/index.d.ts:53*

OpenAPI security definitions

___

### summary

• `Optional` **summary**: string

*Defined in lib/index.d.ts:37*

Route summary

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in lib/index.d.ts:41*

Route tags
