**[fastify-oas](../README.md)**

> [Globals](../README.md) / BaseParameterObject

# Interface: BaseParameterObject

## Hierarchy

- [ISpecificationExtension](ispecificationextension.md)

  ↳ **BaseParameterObject**

  ↳↳ [ParameterObject](parameterobject.md)

  ↳↳ [HeaderObject](headerobject.md)

## Indexable

▪ [extensionName: string]: any

## Index

### Properties

- [allowEmptyValue](baseparameterobject.md#allowemptyvalue)
- [allowReserved](baseparameterobject.md#allowreserved)
- [content](baseparameterobject.md#content)
- [deprecated](baseparameterobject.md#deprecated)
- [description](baseparameterobject.md#description)
- [example](baseparameterobject.md#example)
- [examples](baseparameterobject.md#examples)
- [explode](baseparameterobject.md#explode)
- [required](baseparameterobject.md#required)
- [schema](baseparameterobject.md#schema)
- [style](baseparameterobject.md#style)

## Properties

### allowEmptyValue

• `Optional` **allowEmptyValue**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:116_

---

### allowReserved

• `Optional` **allowReserved**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:119_

---

### content

• `Optional` **content**: [ContentObject](contentobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:125_

---

### deprecated

• `Optional` **deprecated**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:115_

---

### description

• `Optional` **description**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:113_

---

### example

• `Optional` **example**: any

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:124_

---

### examples

• `Optional` **examples**: { [param:string]: [ExampleObject](exampleobject.md) \| [ReferenceObject](referenceobject.md); }

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:121_

---

### explode

• `Optional` **explode**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:118_

---

### required

• `Optional` **required**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:114_

---

### schema

• `Optional` **schema**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:120_

---

### style

• `Optional` **style**: [ParameterStyle](../README.md#parameterstyle)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:117_
