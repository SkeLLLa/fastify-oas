[fastify-oas](../README.md) › [Spec](spec.md)

# Interface: Spec

## Hierarchy

* **Spec**

## Index

### Properties

* [basePath](spec.md#optional-basepath)
* [consumes](spec.md#optional-consumes)
* [definitions](spec.md#optional-definitions)
* [externalDocs](spec.md#optional-externaldocs)
* [host](spec.md#optional-host)
* [info](spec.md#info)
* [parameters](spec.md#optional-parameters)
* [paths](spec.md#paths)
* [produces](spec.md#optional-produces)
* [responses](spec.md#optional-responses)
* [schemes](spec.md#optional-schemes)
* [security](spec.md#optional-security)
* [securityDefinitions](spec.md#optional-securitydefinitions)
* [swagger](spec.md#swagger)
* [tags](spec.md#optional-tags)

## Properties

### `Optional` basePath

• **basePath**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:262

___

### `Optional` consumes

• **consumes**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:264

___

### `Optional` definitions

• **definitions**? : *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:267

#### Type declaration:

* \[ **definitionsName**: *string*\]: [Schema](schema.md)

___

### `Optional` externalDocs

• **externalDocs**? : *[ExternalDocs](externaldocs.md)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:260

___

### `Optional` host

• **host**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:261

___

###  info

• **info**: *[Info](info.md)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:259

___

### `Optional` parameters

• **parameters**? : *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:268

#### Type declaration:

* \[ **parameterName**: *string*\]: [BodyParameter](../README.md#bodyparameter) | [QueryParameter](../README.md#queryparameter)

___

###  paths

• **paths**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:266

#### Type declaration:

* \[ **pathName**: *string*\]: [Path](path.md)

___

### `Optional` produces

• **produces**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:265

___

### `Optional` responses

• **responses**? : *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:269

#### Type declaration:

* \[ **responseName**: *string*\]: [Response](response.md)

___

### `Optional` schemes

• **schemes**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:263

___

### `Optional` security

• **security**? : *Array‹object›*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:270

___

### `Optional` securityDefinitions

• **securityDefinitions**? : *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:271

#### Type declaration:

* \[ **securityDefinitionName**: *string*\]: [Security](../README.md#security)

___

###  swagger

• **swagger**: *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:258

___

### `Optional` tags

• **tags**? : *[Tag](tag.md)[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:272
