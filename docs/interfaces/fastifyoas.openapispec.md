[fastify-oas](../README.md) › [fastifyOAS](../modules/fastifyoas.md) › [OpenApiSpec](fastifyoas.openapispec.md)

# Interface: OpenApiSpec

## Hierarchy

- **OpenApiSpec**

## Index

### Properties

- [basePath](fastifyoas.openapispec.md#optional-basepath)
- [components](fastifyoas.openapispec.md#optional-components)
- [consumes](fastifyoas.openapispec.md#optional-consumes)
- [externalDocs](fastifyoas.openapispec.md#optional-externaldocs)
- [host](fastifyoas.openapispec.md#optional-host)
- [info](fastifyoas.openapispec.md#optional-info)
- [produces](fastifyoas.openapispec.md#optional-produces)
- [schemes](fastifyoas.openapispec.md#optional-schemes)
- [security](fastifyoas.openapispec.md#optional-security)
- [securityDefinitions](fastifyoas.openapispec.md#optional-securitydefinitions)
- [servers](fastifyoas.openapispec.md#optional-servers)
- [tags](fastifyoas.openapispec.md#optional-tags)
- [x-tagGroups](fastifyoas.openapispec.md#optional-x-taggroups)

## Properties

### `Optional` basePath

• **basePath**? : _string_

Defined in lib/index.d.ts:66

---

### `Optional` components

• **components**? : _[ComponentsObject](componentsobject.md)_

Defined in lib/index.d.ts:75

---

### `Optional` consumes

• **consumes**? : _Array‹string›_

Defined in lib/index.d.ts:69

---

### `Optional` externalDocs

• **externalDocs**? : _[ExternalDocumentationObject](externaldocumentationobject.md) | [ExternalDocs](externaldocs.md)_

Defined in lib/index.d.ts:64

---

### `Optional` host

• **host**? : _string_

Defined in lib/index.d.ts:65

---

### `Optional` info

• **info**? : _[InfoObject](infoobject.md) | [Info](info.md)_

Defined in lib/index.d.ts:63

---

### `Optional` produces

• **produces**? : _Array‹string›_

Defined in lib/index.d.ts:70

---

### `Optional` schemes

• **schemes**? : _[SchemasObject](schemasobject.md) | Array‹string›_

Defined in lib/index.d.ts:68

---

### `Optional` security

• **security**? : _Array‹[SecurityRequirementObject](securityrequirementobject.md)› | Array‹object›_

Defined in lib/index.d.ts:71

---

### `Optional` securityDefinitions

• **securityDefinitions**? : _object_

Defined in lib/index.d.ts:76

#### Type declaration:

- \[ **securityDefinitionName**: _string_\]: [Security](../README.md#security)

---

### `Optional` servers

• **servers**? : _Array‹[Server](../classes/server.md)›_

Defined in lib/index.d.ts:74

---

### `Optional` tags

• **tags**? : _Array‹[TagObject](tagobject.md)› | Array‹[Tag](tag.md)›_

Defined in lib/index.d.ts:79

---

### `Optional` x-tagGroups

• **x-tagGroups**? : _string_

Defined in lib/index.d.ts:67
