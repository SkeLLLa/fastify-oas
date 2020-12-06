**[fastify-oas](../README.md)**

> [Globals](../README.md) / Server

# Class: Server

## Hierarchy

- **Server**

## Implements

- [ServerObject](../interfaces/serverobject.md)

## Index

### Constructors

- [constructor](server.md#constructor)

### Properties

- [description](server.md#description)
- [url](server.md#url)
- [variables](server.md#variables)

### Methods

- [addVariable](server.md#addvariable)

## Constructors

### constructor

\+ **new Server**(`url`: string, `desc?`: string): [Server](server.md)

_Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:7_

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| `url`   | string |
| `desc?` | string |

**Returns:** [Server](server.md)

## Properties

### description

• `Optional` **description**: string

_Implementation of [ServerObject](../interfaces/serverobject.md).[description](../interfaces/serverobject.md#description)_

_Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:4_

---

### url

• **url**: string

_Implementation of [ServerObject](../interfaces/serverobject.md).[url](../interfaces/serverobject.md#url)_

_Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:3_

---

### variables

• **variables**: { [v:string]: [ServerVariable](servervariable.md); }

_Implementation of [ServerObject](../interfaces/serverobject.md).[variables](../interfaces/serverobject.md#variables)_

_Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:5_

## Methods

### addVariable

▸ **addVariable**(`name`: string, `variable`: [ServerVariable](servervariable.md)): void

_Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:9_

#### Parameters:

| Name       | Type                                |
| ---------- | ----------------------------------- |
| `name`     | string                              |
| `variable` | [ServerVariable](servervariable.md) |

**Returns:** void
