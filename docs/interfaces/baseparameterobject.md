**[fastify-oas](../README.md)**

> [Globals](../README.md) / BaseParameterObject

# Interface: BaseParameterObject

## Hierarchy

* [ISpecificationExtension](ispecificationextension.md)

  ↳ **BaseParameterObject**

  ↳↳ [ParameterObject](parameterobject.md)

  ↳↳ [HeaderObject](headerobject.md)

## Indexable

▪ [extensionName: string]: any

## Index

### Properties

* [allowEmptyValue](baseparameterobject.md#allowemptyvalue)
* [allowReserved](baseparameterobject.md#allowreserved)
* [content](baseparameterobject.md#content)
* [deprecated](baseparameterobject.md#deprecated)
* [description](baseparameterobject.md#description)
* [example](baseparameterobject.md#example)
* [examples](baseparameterobject.md#examples)
* [explode](baseparameterobject.md#explode)
* [required](baseparameterobject.md#required)
* [schema](baseparameterobject.md#schema)
* [style](baseparameterobject.md#style)

## Properties

### allowEmptyValue

• `Optional` **allowEmptyValue**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:116*

___

### allowReserved

• `Optional` **allowReserved**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:119*

___

### content

• `Optional` **content**: [ContentObject](contentobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:125*

___

### deprecated

• `Optional` **deprecated**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:115*

___

### description

• `Optional` **description**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:113*

___

### example

• `Optional` **example**: any

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:124*

___

### examples

• `Optional` **examples**: { [param:string]: [ExampleObject](exampleobject.md) \| [ReferenceObject](referenceobject.md);  }

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:121*

___

### explode

• `Optional` **explode**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:118*

___

### required

• `Optional` **required**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:114*

___

### schema

• `Optional` **schema**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:120*

___

### style

• `Optional` **style**: [ParameterStyle](../README.md#parameterstyle)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:117*
