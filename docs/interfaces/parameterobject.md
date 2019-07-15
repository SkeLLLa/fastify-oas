> **[fastify-oas](../README.md)**

[ParameterObject](parameterobject.md) /

# Interface: ParameterObject

## Hierarchy

  * [BaseParameterObject](baseparameterobject.md)

  * **ParameterObject**

## Indexable

● \[▪ **extensionName**: *string*\]: any

### Index

#### Properties

* [allowEmptyValue](parameterobject.md#optional-allowemptyvalue)
* [allowReserved](parameterobject.md#optional-allowreserved)
* [content](parameterobject.md#optional-content)
* [deprecated](parameterobject.md#optional-deprecated)
* [description](parameterobject.md#optional-description)
* [example](parameterobject.md#optional-example)
* [examples](parameterobject.md#optional-examples)
* [explode](parameterobject.md#optional-explode)
* [in](parameterobject.md#in)
* [name](parameterobject.md#name)
* [required](parameterobject.md#optional-required)
* [schema](parameterobject.md#optional-schema)
* [style](parameterobject.md#optional-style)

## Properties

### `Optional` allowEmptyValue

• **allowEmptyValue**? : *boolean*

*Inherited from [BaseParameterObject](baseparameterobject.md).[allowEmptyValue](baseparameterobject.md#optional-allowemptyvalue)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:116

___

### `Optional` allowReserved

• **allowReserved**? : *boolean*

*Inherited from [BaseParameterObject](baseparameterobject.md).[allowReserved](baseparameterobject.md#optional-allowreserved)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:119

___

### `Optional` content

• **content**? : *[ContentObject](contentobject.md)*

*Inherited from [BaseParameterObject](baseparameterobject.md).[content](baseparameterobject.md#optional-content)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:125

___

### `Optional` deprecated

• **deprecated**? : *boolean*

*Inherited from [BaseParameterObject](baseparameterobject.md).[deprecated](baseparameterobject.md#optional-deprecated)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:115

___

### `Optional` description

• **description**? : *string*

*Inherited from [BaseParameterObject](baseparameterobject.md).[description](baseparameterobject.md#optional-description)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:113

___

### `Optional` example

• **example**? : *any*

*Inherited from [BaseParameterObject](baseparameterobject.md).[example](baseparameterobject.md#optional-example)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:124

___

### `Optional` examples

• **examples**? : *object*

*Inherited from [BaseParameterObject](baseparameterobject.md).[examples](baseparameterobject.md#optional-examples)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:121

#### Type declaration:

● \[▪ **param**: *string*\]: [ExampleObject](exampleobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` explode

• **explode**? : *boolean*

*Inherited from [BaseParameterObject](baseparameterobject.md).[explode](baseparameterobject.md#optional-explode)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:118

___

###  in

• **in**: *[ParameterLocation](../README.md#parameterlocation)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:129

___

###  name

• **name**: *string*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:128

___

### `Optional` required

• **required**? : *boolean*

*Inherited from [BaseParameterObject](baseparameterobject.md).[required](baseparameterobject.md#optional-required)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:114

___

### `Optional` schema

• **schema**? : *[SchemaObject](schemaobject.md) | [ReferenceObject](referenceobject.md)*

*Inherited from [BaseParameterObject](baseparameterobject.md).[schema](baseparameterobject.md#optional-schema)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:120

___

### `Optional` style

• **style**? : *[ParameterStyle](../README.md#parameterstyle)*

*Inherited from [BaseParameterObject](baseparameterobject.md).[style](baseparameterobject.md#optional-style)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:117