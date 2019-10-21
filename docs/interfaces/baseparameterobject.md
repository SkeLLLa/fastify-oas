[fastify-oas](../README.md) › [BaseParameterObject](baseparameterobject.md)

# Interface: BaseParameterObject

## Hierarchy

* [ISpecificationExtension](ispecificationextension.md)

  ↳ **BaseParameterObject**

  ↳ [ParameterObject](parameterobject.md)

  ↳ [HeaderObject](headerobject.md)

## Indexable

* \[ **extensionName**: *string*\]: any

## Index

### Properties

* [allowEmptyValue](baseparameterobject.md#optional-allowemptyvalue)
* [allowReserved](baseparameterobject.md#optional-allowreserved)
* [content](baseparameterobject.md#optional-content)
* [deprecated](baseparameterobject.md#optional-deprecated)
* [description](baseparameterobject.md#optional-description)
* [example](baseparameterobject.md#optional-example)
* [examples](baseparameterobject.md#optional-examples)
* [explode](baseparameterobject.md#optional-explode)
* [required](baseparameterobject.md#optional-required)
* [schema](baseparameterobject.md#optional-schema)
* [style](baseparameterobject.md#optional-style)

## Properties

### `Optional` allowEmptyValue

• **allowEmptyValue**? : *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:116

___

### `Optional` allowReserved

• **allowReserved**? : *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:119

___

### `Optional` content

• **content**? : *[ContentObject](contentobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:125

___

### `Optional` deprecated

• **deprecated**? : *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:115

___

### `Optional` description

• **description**? : *string*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:113

___

### `Optional` example

• **example**? : *any*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:124

___

### `Optional` examples

• **examples**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:121

#### Type declaration:

* \[ **param**: *string*\]: [ExampleObject](exampleobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` explode

• **explode**? : *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:118

___

### `Optional` required

• **required**? : *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:114

___

### `Optional` schema

• **schema**? : *[SchemaObject](schemaobject.md) | [ReferenceObject](referenceobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:120

___

### `Optional` style

• **style**? : *[ParameterStyle](../README.md#parameterstyle)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:117
