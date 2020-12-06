**[fastify-oas](../README.md)**

> [Globals](../README.md) / [fastifyOAS](../modules/fastifyoas.md) / OpenApiSpec

# Interface: OpenApiSpec

## Hierarchy

- **OpenApiSpec**

## Index

### Properties

- [basePath](fastifyoas.openapispec.md#basepath)
- [components](fastifyoas.openapispec.md#components)
- [consumes](fastifyoas.openapispec.md#consumes)
- [externalDocs](fastifyoas.openapispec.md#externaldocs)
- [host](fastifyoas.openapispec.md#host)
- [info](fastifyoas.openapispec.md#info)
- [produces](fastifyoas.openapispec.md#produces)
- [schemes](fastifyoas.openapispec.md#schemes)
- [security](fastifyoas.openapispec.md#security)
- [securityDefinitions](fastifyoas.openapispec.md#securitydefinitions)
- [servers](fastifyoas.openapispec.md#servers)
- [tags](fastifyoas.openapispec.md#tags)
- [x-tagGroups](fastifyoas.openapispec.md#x-taggroups)

## Properties

### basePath

• `Optional` **basePath**: string

_Defined in lib/index.d.ts:66_

---

### components

• `Optional` **components**: [ComponentsObject](componentsobject.md)

_Defined in lib/index.d.ts:75_

---

### consumes

• `Optional` **consumes**: Array\<string>

_Defined in lib/index.d.ts:69_

---

### externalDocs

• `Optional` **externalDocs**: [ExternalDocumentationObject](externaldocumentationobject.md) \| [ExternalDocs](externaldocs.md)

_Defined in lib/index.d.ts:64_

---

### host

• `Optional` **host**: string

_Defined in lib/index.d.ts:65_

---

### info

• `Optional` **info**: [InfoObject](infoobject.md) \| [Info](info.md)

_Defined in lib/index.d.ts:63_

---

### produces

• `Optional` **produces**: Array\<string>

_Defined in lib/index.d.ts:70_

---

### schemes

• `Optional` **schemes**: [SchemasObject](schemasobject.md) \| Array\<string>

_Defined in lib/index.d.ts:68_

---

### security

• `Optional` **security**: Array\<[SecurityRequirementObject](securityrequirementobject.md)> \| Array\<{ [securityDefinitionName:string]: Array\<string>; }>

_Defined in lib/index.d.ts:71_

---

### securityDefinitions

• `Optional` **securityDefinitions**: { [securityDefinitionName:string]: [Security](../README.md#security); }

_Defined in lib/index.d.ts:76_

---

### servers

• `Optional` **servers**: Array\<[Server](../classes/server.md)>

_Defined in lib/index.d.ts:74_

---

### tags

• `Optional` **tags**: Array\<[TagObject](tagobject.md)> \| Array\<[Tag](tag.md)>

_Defined in lib/index.d.ts:79_

---

### x-tagGroups

• `Optional` **x-tagGroups**: string

_Defined in lib/index.d.ts:67_
