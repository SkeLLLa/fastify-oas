[fastify-oas](../README.md) › [Operation](operation.md)

# Interface: Operation

## Hierarchy

* **Operation**

## Index

### Properties

* [consumes](operation.md#optional-consumes)
* [deprecated](operation.md#optional-deprecated)
* [description](operation.md#optional-description)
* [externalDocs](operation.md#optional-externaldocs)
* [operationId](operation.md#optional-operationid)
* [parameters](operation.md#optional-parameters)
* [produces](operation.md#optional-produces)
* [responses](operation.md#responses)
* [schemes](operation.md#optional-schemes)
* [security](operation.md#optional-security)
* [summary](operation.md#optional-summary)
* [tags](operation.md#optional-tags)

## Properties

### `Optional` consumes

• **consumes**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:131

___

### `Optional` deprecated

• **deprecated**? : *boolean*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:134

___

### `Optional` description

• **description**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:127

___

### `Optional` externalDocs

• **externalDocs**? : *[ExternalDocs](externaldocs.md)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:128

___

### `Optional` operationId

• **operationId**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:129

___

### `Optional` parameters

• **parameters**? : *Array‹[Parameter](../README.md#parameter) | [Reference](reference.md)›*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:132

___

### `Optional` produces

• **produces**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:130

___

###  responses

• **responses**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:125

#### Type declaration:

* \[ **responseName**: *string*\]: [Response](response.md) | [Reference](reference.md)

___

### `Optional` schemes

• **schemes**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:133

___

### `Optional` security

• **security**? : *[Security](../README.md#security)[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:135

___

### `Optional` summary

• **summary**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:126

___

### `Optional` tags

• **tags**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:136
