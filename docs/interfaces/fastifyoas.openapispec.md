[fastify-oas](../README.md) › [fastifyOAS](../modules/fastifyoas.md) › [OpenApiSpec](fastifyoas.openapispec.md)

# Interface: OpenApiSpec

## Hierarchy

* **OpenApiSpec**

## Index

### Properties

* [basePath](fastifyoas.openapispec.md#optional-basepath)
* [components](fastifyoas.openapispec.md#optional-components)
* [consumes](fastifyoas.openapispec.md#optional-consumes)
* [externalDocs](fastifyoas.openapispec.md#optional-externaldocs)
* [host](fastifyoas.openapispec.md#optional-host)
* [info](fastifyoas.openapispec.md#optional-info)
* [produces](fastifyoas.openapispec.md#optional-produces)
* [schemes](fastifyoas.openapispec.md#optional-schemes)
* [security](fastifyoas.openapispec.md#optional-security)
* [securityDefinitions](fastifyoas.openapispec.md#optional-securitydefinitions)
* [servers](fastifyoas.openapispec.md#optional-servers)
* [tags](fastifyoas.openapispec.md#optional-tags)
* [x-tagGroups](fastifyoas.openapispec.md#optional-x-taggroups)

## Properties

### `Optional` basePath

• **basePath**? : *string*

Defined in lib/index.d.ts:70

___

### `Optional` components

• **components**? : *[ComponentsObject](componentsobject.md)*

Defined in lib/index.d.ts:79

___

### `Optional` consumes

• **consumes**? : *Array‹string›*

Defined in lib/index.d.ts:73

___

### `Optional` externalDocs

• **externalDocs**? : *[ExternalDocumentationObject](externaldocumentationobject.md) | [ExternalDocs](externaldocs.md)*

Defined in lib/index.d.ts:68

___

### `Optional` host

• **host**? : *string*

Defined in lib/index.d.ts:69

___

### `Optional` info

• **info**? : *[InfoObject](infoobject.md) | [Info](info.md)*

Defined in lib/index.d.ts:67

___

### `Optional` produces

• **produces**? : *Array‹string›*

Defined in lib/index.d.ts:74

___

### `Optional` schemes

• **schemes**? : *[SchemasObject](schemasobject.md) | Array‹string›*

Defined in lib/index.d.ts:72

___

### `Optional` security

• **security**? : *Array‹[SecurityRequirementObject](securityrequirementobject.md)› | Array‹object›*

Defined in lib/index.d.ts:75

___

### `Optional` securityDefinitions

• **securityDefinitions**? : *object*

Defined in lib/index.d.ts:80

#### Type declaration:

* \[ **securityDefinitionName**: *string*\]: [Security](../README.md#security)

___

### `Optional` servers

• **servers**? : *Array‹[Server](../classes/server.md)›*

Defined in lib/index.d.ts:78

___

### `Optional` tags

• **tags**? : *Array‹[TagObject](tagobject.md)› | Array‹[Tag](tag.md)›*

Defined in lib/index.d.ts:83

___

### `Optional` x-tagGroups

• **x-tagGroups**? : *string*

Defined in lib/index.d.ts:71
