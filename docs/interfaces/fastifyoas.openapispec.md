[fastify-oas](../README.md) > [fastifyOAS](../modules/fastifyoas.md) > [OpenApiSpec](../interfaces/fastifyoas.openapispec.md)

# Interface: OpenApiSpec

## Hierarchy

**OpenApiSpec**

## Index

### Properties

* [basePath](fastifyoas.openapispec.md#basepath)
* [componetns](fastifyoas.openapispec.md#componetns)
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
* [x-tagGroups](fastifyoas.openapispec.md#x_taggroups)

---

## Properties

<a id="basepath"></a>

### `<Optional>` basePath

**● basePath**: *`String`*

*Defined in lib/index.d.ts:66*

___
<a id="componetns"></a>

### `<Optional>` componetns

**● componetns**: *[ComponentsObject](componentsobject.md)*

*Defined in lib/index.d.ts:75*

___
<a id="consumes"></a>

### `<Optional>` consumes

**● consumes**: *`Array`<`String`>*

*Defined in lib/index.d.ts:69*

___
<a id="externaldocs"></a>

### `<Optional>` externalDocs

**● externalDocs**: * [ExternalDocumentationObject](externaldocumentationobject.md) &#124; [ExternalDocs](externaldocs.md)
*

*Defined in lib/index.d.ts:64*

___
<a id="host"></a>

### `<Optional>` host

**● host**: *`String`*

*Defined in lib/index.d.ts:65*

___
<a id="info"></a>

### `<Optional>` info

**● info**: * [InfoObject](infoobject.md) &#124; [Info](info.md)
*

*Defined in lib/index.d.ts:63*

___
<a id="produces"></a>

### `<Optional>` produces

**● produces**: *`Array`<`String`>*

*Defined in lib/index.d.ts:70*

___
<a id="schemes"></a>

### `<Optional>` schemes

**● schemes**: * [SchemasObject](schemasobject.md) &#124; `Array`<`String`>
*

*Defined in lib/index.d.ts:68*

___
<a id="security"></a>

### `<Optional>` security

**● security**: * `Array`<[SecurityRequirementObject](securityrequirementobject.md)> &#124; `Array`<`object`>
*

*Defined in lib/index.d.ts:71*

___
<a id="securitydefinitions"></a>

### `<Optional>` securityDefinitions

**● securityDefinitions**: *`object`*

*Defined in lib/index.d.ts:76*

#### Type declaration

[securityDefinitionName: `string`]: [Security](../#security)

___
<a id="servers"></a>

### `<Optional>` servers

**● servers**: *`Array`<[Server](../classes/server.md)>*

*Defined in lib/index.d.ts:74*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: * `Array`<[TagObject](tagobject.md)> &#124; `Array`<[Tag](tag.md)>
*

*Defined in lib/index.d.ts:79*

___
<a id="x_taggroups"></a>

### `<Optional>` x-tagGroups

**● x-tagGroups**: *`String`*

*Defined in lib/index.d.ts:67*

___

