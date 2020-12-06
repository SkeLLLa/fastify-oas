**[fastify-oas](../README.md)**

> [Globals](../README.md) / ["fastify"](../modules/_fastify_.md) / RouteSchema

# Interface: RouteSchema

## Hierarchy

- **RouteSchema**

## Index

### Properties

- [consumes](_fastify_.routeschema.md#consumes)
- [description](_fastify_.routeschema.md#description)
- [hide](_fastify_.routeschema.md#hide)
- [operationId](_fastify_.routeschema.md#operationid)
- [produces](_fastify_.routeschema.md#produces)
- [security](_fastify_.routeschema.md#security)
- [summary](_fastify_.routeschema.md#summary)
- [tags](_fastify_.routeschema.md#tags)

## Properties

### consumes

• `Optional` **consumes**: Array\<string>

_Defined in lib/index.d.ts:45_

Media types route consumes

---

### description

• `Optional` **description**: string

_Defined in lib/index.d.ts:33_

Route description

---

### hide

• `Optional` **hide**: boolean

_Defined in lib/index.d.ts:29_

Hides route from result OpenAPI document

**`default`** false

---

### operationId

• `Optional` **operationId**: string

_Defined in lib/index.d.ts:57_

OpenAPI operation unique identifier

---

### produces

• `Optional` **produces**: Array\<string>

_Defined in lib/index.d.ts:49_

Media types route produces

---

### security

• `Optional` **security**: Array\<[SecurityRequirementObject](securityrequirementobject.md)>

_Defined in lib/index.d.ts:53_

OpenAPI security definitions

---

### summary

• `Optional` **summary**: string

_Defined in lib/index.d.ts:37_

Route summary

---

### tags

• `Optional` **tags**: Array\<string>

_Defined in lib/index.d.ts:41_

Route tags
