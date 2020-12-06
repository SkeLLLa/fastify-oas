**[fastify-oas](../README.md)**

> [Globals](../README.md) / [fastifyOAS](../modules/fastifyoas.md) / OpenApiSpec

# Interface: OpenApiSpec

## Hierarchy

* **OpenApiSpec**

## Index

### Properties

* [basePath](fastifyoas.openapispec.md#basepath)
* [components](fastifyoas.openapispec.md#components)
* [consumes](fastifyoas.openapispec.md#consumes)
* [externalDocs](fastifyoas.openapispec.md#externaldocs)
* [host](fastifyoas.openapispec.md#host)
* [info](fastifyoas.openapispec.md#info)
* [produces](fastifyoas.openapispec.md#produces)
* [schemes](fastifyoas.openapispec.md#schemes)
* [security](fastifyoas.openapispec.md#security)
* [securityDefinitions](fastifyoas.openapispec.md#securitydefinitions)
* [servers](fastifyoas.openapispec.md#servers)
* [tags](fastifyoas.openapispec.md#tags)
* [x-tagGroups](fastifyoas.openapispec.md#x-taggroups)

## Properties

### basePath

• `Optional` **basePath**: string

*Defined in lib/index.d.ts:66*

___

### components

• `Optional` **components**: [ComponentsObject](componentsobject.md)

*Defined in lib/index.d.ts:75*

___

### consumes

• `Optional` **consumes**: Array\<string>

*Defined in lib/index.d.ts:69*

___

### externalDocs

• `Optional` **externalDocs**: [ExternalDocumentationObject](externaldocumentationobject.md) \| [ExternalDocs](externaldocs.md)

*Defined in lib/index.d.ts:64*

___

### host

• `Optional` **host**: string

*Defined in lib/index.d.ts:65*

___

### info

• `Optional` **info**: [InfoObject](infoobject.md) \| [Info](info.md)

*Defined in lib/index.d.ts:63*

___

### produces

• `Optional` **produces**: Array\<string>

*Defined in lib/index.d.ts:70*

___

### schemes

• `Optional` **schemes**: [SchemasObject](schemasobject.md) \| Array\<string>

*Defined in lib/index.d.ts:68*

___

### security

• `Optional` **security**: Array\<[SecurityRequirementObject](securityrequirementobject.md)> \| Array\<{ [securityDefinitionName:string]: Array\<string>;  }>

*Defined in lib/index.d.ts:71*

___

### securityDefinitions

• `Optional` **securityDefinitions**: { [securityDefinitionName:string]: [Security](../README.md#security);  }

*Defined in lib/index.d.ts:76*

___

### servers

• `Optional` **servers**: Array\<[Server](../classes/server.md)>

*Defined in lib/index.d.ts:74*

___

### tags

• `Optional` **tags**: Array\<[TagObject](tagobject.md)> \| Array\<[Tag](tag.md)>

*Defined in lib/index.d.ts:79*

___

### x-tagGroups

• `Optional` **x-tagGroups**: string

*Defined in lib/index.d.ts:67*
