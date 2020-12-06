**[fastify-oas](../README.md)**

> [Globals](../README.md) / Operation

# Interface: Operation

## Hierarchy

* **Operation**

## Index

### Properties

* [consumes](operation.md#consumes)
* [deprecated](operation.md#deprecated)
* [description](operation.md#description)
* [externalDocs](operation.md#externaldocs)
* [operationId](operation.md#operationid)
* [parameters](operation.md#parameters)
* [produces](operation.md#produces)
* [responses](operation.md#responses)
* [schemes](operation.md#schemes)
* [security](operation.md#security)
* [summary](operation.md#summary)
* [tags](operation.md#tags)

## Properties

### consumes

• `Optional` **consumes**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:131*

___

### deprecated

• `Optional` **deprecated**: boolean

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:134*

___

### description

• `Optional` **description**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:127*

___

### externalDocs

• `Optional` **externalDocs**: [ExternalDocs](externaldocs.md)

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:128*

___

### operationId

• `Optional` **operationId**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:129*

___

### parameters

• `Optional` **parameters**: Array\<[Parameter](../README.md#parameter) \| [Reference](reference.md)>

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:132*

___

### produces

• `Optional` **produces**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:130*

___

### responses

•  **responses**: { [responseName:string]: [Response](response.md) \| [Reference](reference.md);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:125*

___

### schemes

• `Optional` **schemes**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:133*

___

### security

• `Optional` **security**: Array\<{ [securityDefinitionName:string]: string[];  }>

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:135*

___

### summary

• `Optional` **summary**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:126*

___

### tags

• `Optional` **tags**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:136*
