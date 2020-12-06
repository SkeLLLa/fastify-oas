**[fastify-oas](../README.md)**

> [Globals](../README.md) / Operation

# Interface: Operation

## Hierarchy

- **Operation**

## Index

### Properties

- [consumes](operation.md#consumes)
- [deprecated](operation.md#deprecated)
- [description](operation.md#description)
- [externalDocs](operation.md#externaldocs)
- [operationId](operation.md#operationid)
- [parameters](operation.md#parameters)
- [produces](operation.md#produces)
- [responses](operation.md#responses)
- [schemes](operation.md#schemes)
- [security](operation.md#security)
- [summary](operation.md#summary)
- [tags](operation.md#tags)

## Properties

### consumes

• `Optional` **consumes**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:131_

---

### deprecated

• `Optional` **deprecated**: boolean

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:134_

---

### description

• `Optional` **description**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:127_

---

### externalDocs

• `Optional` **externalDocs**: [ExternalDocs](externaldocs.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:128_

---

### operationId

• `Optional` **operationId**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:129_

---

### parameters

• `Optional` **parameters**: Array\<[Parameter](../README.md#parameter) \| [Reference](reference.md)>

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:132_

---

### produces

• `Optional` **produces**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:130_

---

### responses

• **responses**: { [responseName:string]: [Response](response.md) \| [Reference](reference.md); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:125_

---

### schemes

• `Optional` **schemes**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:133_

---

### security

• `Optional` **security**: Array\<{ [securityDefinitionName:string]: string[]; }>

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:135_

---

### summary

• `Optional` **summary**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:126_

---

### tags

• `Optional` **tags**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:136_
