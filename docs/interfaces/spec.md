**[fastify-oas](../README.md)**

> [Globals](../README.md) / Spec

# Interface: Spec

## Hierarchy

- **Spec**

## Index

### Properties

- [basePath](spec.md#basepath)
- [consumes](spec.md#consumes)
- [definitions](spec.md#definitions)
- [externalDocs](spec.md#externaldocs)
- [host](spec.md#host)
- [info](spec.md#info)
- [parameters](spec.md#parameters)
- [paths](spec.md#paths)
- [produces](spec.md#produces)
- [responses](spec.md#responses)
- [schemes](spec.md#schemes)
- [security](spec.md#security)
- [securityDefinitions](spec.md#securitydefinitions)
- [swagger](spec.md#swagger)
- [tags](spec.md#tags)

## Properties

### basePath

• `Optional` **basePath**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:262_

---

### consumes

• `Optional` **consumes**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:264_

---

### definitions

• `Optional` **definitions**: { [definitionsName:string]: [Schema](schema.md); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:267_

---

### externalDocs

• `Optional` **externalDocs**: [ExternalDocs](externaldocs.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:260_

---

### host

• `Optional` **host**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:261_

---

### info

• **info**: [Info](info.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:259_

---

### parameters

• `Optional` **parameters**: { [parameterName:string]: [BodyParameter](../README.md#bodyparameter) \| [QueryParameter](../README.md#queryparameter); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:268_

---

### paths

• **paths**: { [pathName:string]: [Path](path.md); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:266_

---

### produces

• `Optional` **produces**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:265_

---

### responses

• `Optional` **responses**: { [responseName:string]: [Response](response.md); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:269_

---

### schemes

• `Optional` **schemes**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:263_

---

### security

• `Optional` **security**: Array\<{ [securityDefinitionName:string]: string[]; }>

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:270_

---

### securityDefinitions

• `Optional` **securityDefinitions**: { [securityDefinitionName:string]: [Security](../README.md#security); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:271_

---

### swagger

• **swagger**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:258_

---

### tags

• `Optional` **tags**: [Tag](tag.md)[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:272_
