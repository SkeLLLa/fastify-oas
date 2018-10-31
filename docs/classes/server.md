[fastify-oas](../README.md) > [Server](../classes/server.md)

# Class: Server

## Hierarchy

**Server**

## Implements

* [ServerObject](../interfaces/serverobject.md)

## Index

### Constructors

* [constructor](server.md#constructor)

### Properties

* [description](server.md#description)
* [url](server.md#url)
* [variables](server.md#variables)

### Methods

* [addVariable](server.md#addvariable)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Server**(url: *`string`*, desc?: *`string`*): [Server](server.md)

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:7*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` desc | `string` |

**Returns:** [Server](server.md)

___

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Implementation of [ServerObject](../interfaces/serverobject.md).[description](../interfaces/serverobject.md#description)*

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:4*

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Implementation of [ServerObject](../interfaces/serverobject.md).[url](../interfaces/serverobject.md#url)*

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:3*

___
<a id="variables"></a>

###  variables

**● variables**: *`object`*

*Implementation of [ServerObject](../interfaces/serverobject.md).[variables](../interfaces/serverobject.md#variables)*

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:5*

#### Type declaration

[v: `string`]: [ServerVariable](servervariable.md)

___

## Methods

<a id="addvariable"></a>

###  addVariable

▸ **addVariable**(name: *`string`*, variable: *[ServerVariable](servervariable.md)*): `void`

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:9*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| variable | [ServerVariable](servervariable.md) |

**Returns:** `void`

___

