**[fastify-oas](../README.md)**

> [Globals](../README.md) / OperationObject

# Interface: OperationObject

## Hierarchy

- [ISpecificationExtension](ispecificationextension.md)

  ↳ **OperationObject**

## Indexable

▪ [extensionName: string]: any

## Index

### Properties

- [callbacks](operationobject.md#callbacks)
- [deprecated](operationobject.md#deprecated)
- [description](operationobject.md#description)
- [externalDocs](operationobject.md#externaldocs)
- [operationId](operationobject.md#operationid)
- [parameters](operationobject.md#parameters)
- [requestBody](operationobject.md#requestbody)
- [responses](operationobject.md#responses)
- [security](operationobject.md#security)
- [servers](operationobject.md#servers)
- [summary](operationobject.md#summary)
- [tags](operationobject.md#tags)

## Properties

### callbacks

• `Optional` **callbacks**: [CallbacksObject](callbacksobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:101_

---

### deprecated

• `Optional` **deprecated**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:102_

---

### description

• `Optional` **description**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:95_

---

### externalDocs

• `Optional` **externalDocs**: [ExternalDocumentationObject](externaldocumentationobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:96_

---

### operationId

• `Optional` **operationId**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:97_

---

### parameters

• `Optional` **parameters**: ([ParameterObject](parameterobject.md) \| [ReferenceObject](referenceobject.md))[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:98_

---

### requestBody

• `Optional` **requestBody**: [RequestBodyObject](requestbodyobject.md) \| [ReferenceObject](referenceobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:99_

---

### responses

• **responses**: [ResponsesObject](responsesobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:100_

---

### security

• `Optional` **security**: [SecurityRequirementObject](securityrequirementobject.md)[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:103_

---

### servers

• `Optional` **servers**: [ServerObject](serverobject.md)[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:104_

---

### summary

• `Optional` **summary**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:94_

---

### tags

• `Optional` **tags**: string[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:93_
