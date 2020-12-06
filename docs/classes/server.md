**[fastify-oas](../README.md)**

> [Globals](../README.md) / Server

# Class: Server

## Hierarchy

* **Server**

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

## Constructors

### constructor

\+ **new Server**(`url`: string, `desc?`: string): [Server](server.md)

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:7*

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`desc?` | string |

**Returns:** [Server](server.md)

## Properties

### description

• `Optional` **description**: string

*Implementation of [ServerObject](../interfaces/serverobject.md).[description](../interfaces/serverobject.md#description)*

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:4*

___

### url

•  **url**: string

*Implementation of [ServerObject](../interfaces/serverobject.md).[url](../interfaces/serverobject.md#url)*

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:3*

___

### variables

•  **variables**: { [v:string]: [ServerVariable](servervariable.md);  }

*Implementation of [ServerObject](../interfaces/serverobject.md).[variables](../interfaces/serverobject.md#variables)*

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:5*

## Methods

### addVariable

▸ **addVariable**(`name`: string, `variable`: [ServerVariable](servervariable.md)): void

*Defined in node_modules/openapi3-ts/dist/model/Server.d.ts:9*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`variable` | [ServerVariable](servervariable.md) |

**Returns:** void
