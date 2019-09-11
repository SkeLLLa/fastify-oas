**[fastify-oas](../README.md)**

[Globals](../README.md) › [OperationObject](operationobject.md)

# Interface: OperationObject

## Hierarchy

* [ISpecificationExtension](ispecificationextension.md)

  * **OperationObject**

## Indexable

* \[ **extensionName**: *string*\]: any

## Index

### Properties

* [callbacks](operationobject.md#optional-callbacks)
* [deprecated](operationobject.md#optional-deprecated)
* [description](operationobject.md#optional-description)
* [externalDocs](operationobject.md#optional-externaldocs)
* [operationId](operationobject.md#optional-operationid)
* [parameters](operationobject.md#optional-parameters)
* [requestBody](operationobject.md#optional-requestbody)
* [responses](operationobject.md#responses)
* [security](operationobject.md#optional-security)
* [servers](operationobject.md#optional-servers)
* [summary](operationobject.md#optional-summary)
* [tags](operationobject.md#optional-tags)

## Properties

### `Optional` callbacks

• **callbacks**? : *[CallbacksObject](callbacksobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:101

___

### `Optional` deprecated

• **deprecated**? : *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:102

___

### `Optional` description

• **description**? : *string*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:95

___

### `Optional` externalDocs

• **externalDocs**? : *[ExternalDocumentationObject](externaldocumentationobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:96

___

### `Optional` operationId

• **operationId**? : *string*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:97

___

### `Optional` parameters

• **parameters**? : *[ReferenceObject](referenceobject.md) | [ParameterObject](parameterobject.md)[]*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:98

___

### `Optional` requestBody

• **requestBody**? : *[RequestBodyObject](requestbodyobject.md) | [ReferenceObject](referenceobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:99

___

###  responses

• **responses**: *[ResponsesObject](responsesobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:100

___

### `Optional` security

• **security**? : *[SecurityRequirementObject](securityrequirementobject.md)[]*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:103

___

### `Optional` servers

• **servers**? : *[ServerObject](serverobject.md)[]*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:104

___

### `Optional` summary

• **summary**? : *string*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:94

___

### `Optional` tags

• **tags**? : *string[]*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:93