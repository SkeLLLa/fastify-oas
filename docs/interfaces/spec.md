[fastify-oas](../README.md) > [Spec](../interfaces/spec.md)

# Interface: Spec

## Hierarchy

**Spec**

## Index

### Properties

* [basePath](spec.md#basepath)
* [consumes](spec.md#consumes)
* [definitions](spec.md#definitions)
* [externalDocs](spec.md#externaldocs)
* [host](spec.md#host)
* [info](spec.md#info)
* [parameters](spec.md#parameters)
* [paths](spec.md#paths)
* [produces](spec.md#produces)
* [responses](spec.md#responses)
* [schemes](spec.md#schemes)
* [security](spec.md#security)
* [securityDefinitions](spec.md#securitydefinitions)
* [swagger](spec.md#swagger)
* [tags](spec.md#tags)

---

## Properties

<a id="basepath"></a>

### `<Optional>` basePath

**● basePath**: *`string`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:230*

___
<a id="consumes"></a>

### `<Optional>` consumes

**● consumes**: *`string`[]*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:232*

___
<a id="definitions"></a>

### `<Optional>` definitions

**● definitions**: *`object`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:235*

#### Type declaration

[definitionsName: `string`]: [Schema](schema.md)

___
<a id="externaldocs"></a>

### `<Optional>` externalDocs

**● externalDocs**: *[ExternalDocs](externaldocs.md)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:228*

___
<a id="host"></a>

### `<Optional>` host

**● host**: *`string`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:229*

___
<a id="info"></a>

###  info

**● info**: *[Info](info.md)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:227*

___
<a id="parameters"></a>

### `<Optional>` parameters

**● parameters**: *`object`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:236*

#### Type declaration

[parameterName: `string`]: [BodyParameter](bodyparameter.md) \| [QueryParameter](queryparameter.md)

___
<a id="paths"></a>

###  paths

**● paths**: *`object`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:234*

#### Type declaration

[pathName: `string`]: [Path](path.md)

___
<a id="produces"></a>

### `<Optional>` produces

**● produces**: *`string`[]*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:233*

___
<a id="responses"></a>

### `<Optional>` responses

**● responses**: *`object`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:237*

#### Type declaration

[responseName: `string`]: [Response](response.md)

___
<a id="schemes"></a>

### `<Optional>` schemes

**● schemes**: *`string`[]*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:231*

___
<a id="security"></a>

### `<Optional>` security

**● security**: *`Array`<`object`>*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:238*

___
<a id="securitydefinitions"></a>

### `<Optional>` securityDefinitions

**● securityDefinitions**: *`object`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:239*

#### Type declaration

[securityDefinitionName: `string`]: [Security](../#security)

___
<a id="swagger"></a>

###  swagger

**● swagger**: *`string`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:226*

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *[Tag](tag.md)[]*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:240*

___

