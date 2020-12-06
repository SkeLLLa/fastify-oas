**[fastify-oas](../README.md)**

> [Globals](../README.md) / OperationObject

# Interface: OperationObject

## Hierarchy

* [ISpecificationExtension](ispecificationextension.md)

  ↳ **OperationObject**

## Indexable

▪ [extensionName: string]: any

## Index

### Properties

* [callbacks](operationobject.md#callbacks)
* [deprecated](operationobject.md#deprecated)
* [description](operationobject.md#description)
* [externalDocs](operationobject.md#externaldocs)
* [operationId](operationobject.md#operationid)
* [parameters](operationobject.md#parameters)
* [requestBody](operationobject.md#requestbody)
* [responses](operationobject.md#responses)
* [security](operationobject.md#security)
* [servers](operationobject.md#servers)
* [summary](operationobject.md#summary)
* [tags](operationobject.md#tags)

## Properties

### callbacks

• `Optional` **callbacks**: [CallbacksObject](callbacksobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:101*

___

### deprecated

• `Optional` **deprecated**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:102*

___

### description

• `Optional` **description**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:95*

___

### externalDocs

• `Optional` **externalDocs**: [ExternalDocumentationObject](externaldocumentationobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:96*

___

### operationId

• `Optional` **operationId**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:97*

___

### parameters

• `Optional` **parameters**: ([ParameterObject](parameterobject.md) \| [ReferenceObject](referenceobject.md))[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:98*

___

### requestBody

• `Optional` **requestBody**: [RequestBodyObject](requestbodyobject.md) \| [ReferenceObject](referenceobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:99*

___

### responses

•  **responses**: [ResponsesObject](responsesobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:100*

___

### security

• `Optional` **security**: [SecurityRequirementObject](securityrequirementobject.md)[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:103*

___

### servers

• `Optional` **servers**: [ServerObject](serverobject.md)[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:104*

___

### summary

• `Optional` **summary**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:94*

___

### tags

• `Optional` **tags**: string[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:93*
