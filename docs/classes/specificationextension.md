**[fastify-oas](../README.md)**

> [Globals](../README.md) / SpecificationExtension

# Class: SpecificationExtension

## Hierarchy

- **SpecificationExtension**

## Implements

- [ISpecificationExtension](../interfaces/ispecificationextension.md)

## Indexable

▪ [extensionName: string]: any

## Index

### Methods

- [addExtension](specificationextension.md#addextension)
- [getExtension](specificationextension.md#getextension)
- [listExtensions](specificationextension.md#listextensions)
- [isValidExtension](specificationextension.md#isvalidextension)

## Methods

### addExtension

▸ **addExtension**(`extensionName`: string, `payload`: any): void

_Defined in node_modules/openapi3-ts/dist/model/SpecificationExtension.d.ts:8_

#### Parameters:

| Name            | Type   |
| --------------- | ------ |
| `extensionName` | string |
| `payload`       | any    |

**Returns:** void

---

### getExtension

▸ **getExtension**(`extensionName`: string): any

_Defined in node_modules/openapi3-ts/dist/model/SpecificationExtension.d.ts:7_

#### Parameters:

| Name            | Type   |
| --------------- | ------ |
| `extensionName` | string |

**Returns:** any

---

### listExtensions

▸ **listExtensions**(): string[]

_Defined in node_modules/openapi3-ts/dist/model/SpecificationExtension.d.ts:9_

**Returns:** string[]

---

### isValidExtension

▸ `Static`**isValidExtension**(`extensionName`: string): boolean

_Defined in node_modules/openapi3-ts/dist/model/SpecificationExtension.d.ts:6_

#### Parameters:

| Name            | Type   |
| --------------- | ------ |
| `extensionName` | string |

**Returns:** boolean
