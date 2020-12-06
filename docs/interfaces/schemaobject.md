**[fastify-oas](../README.md)**

> [Globals](../README.md) / SchemaObject

# Interface: SchemaObject

## Hierarchy

- [ISpecificationExtension](ispecificationextension.md)

  ↳ **SchemaObject**

## Indexable

▪ [extensionName: string]: any

## Index

### Properties

- [additionalProperties](schemaobject.md#additionalproperties)
- [allOf](schemaobject.md#allof)
- [anyOf](schemaobject.md#anyof)
- [default](schemaobject.md#default)
- [deprecated](schemaobject.md#deprecated)
- [description](schemaobject.md#description)
- [discriminator](schemaobject.md#discriminator)
- [enum](schemaobject.md#enum)
- [example](schemaobject.md#example)
- [examples](schemaobject.md#examples)
- [exclusiveMaximum](schemaobject.md#exclusivemaximum)
- [exclusiveMinimum](schemaobject.md#exclusiveminimum)
- [externalDocs](schemaobject.md#externaldocs)
- [format](schemaobject.md#format)
- [items](schemaobject.md#items)
- [maxItems](schemaobject.md#maxitems)
- [maxLength](schemaobject.md#maxlength)
- [maxProperties](schemaobject.md#maxproperties)
- [maximum](schemaobject.md#maximum)
- [minItems](schemaobject.md#minitems)
- [minLength](schemaobject.md#minlength)
- [minProperties](schemaobject.md#minproperties)
- [minimum](schemaobject.md#minimum)
- [multipleOf](schemaobject.md#multipleof)
- [not](schemaobject.md#not)
- [nullable](schemaobject.md#nullable)
- [oneOf](schemaobject.md#oneof)
- [pattern](schemaobject.md#pattern)
- [properties](schemaobject.md#properties)
- [readOnly](schemaobject.md#readonly)
- [required](schemaobject.md#required)
- [title](schemaobject.md#title)
- [type](schemaobject.md#type)
- [uniqueItems](schemaobject.md#uniqueitems)
- [writeOnly](schemaobject.md#writeonly)
- [xml](schemaobject.md#xml)

## Properties

### additionalProperties

• `Optional` **additionalProperties**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md) \| boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:233_

---

### allOf

• `Optional` **allOf**: ([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:225_

---

### anyOf

• `Optional` **anyOf**: ([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:227_

---

### default

• `Optional` **default**: any

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:236_

---

### deprecated

• `Optional` **deprecated**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:223_

---

### description

• `Optional` **description**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:234_

---

### discriminator

• `Optional` **discriminator**: [DiscriminatorObject](discriminatorobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:216_

---

### enum

• `Optional` **enum**: any[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:252_

---

### example

• `Optional` **example**: any

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:221_

---

### examples

• `Optional` **examples**: any[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:222_

---

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:240_

---

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:242_

---

### externalDocs

• `Optional` **externalDocs**: [ExternalDocumentationObject](externaldocumentationobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:220_

---

### format

• `Optional` **format**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:235_

---

### items

• `Optional` **items**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:229_

---

### maxItems

• `Optional` **maxItems**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:246_

---

### maxLength

• `Optional` **maxLength**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:243_

---

### maxProperties

• `Optional` **maxProperties**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:249_

---

### maximum

• `Optional` **maximum**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:239_

---

### minItems

• `Optional` **minItems**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:247_

---

### minLength

• `Optional` **minLength**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:244_

---

### minProperties

• `Optional` **minProperties**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:250_

---

### minimum

• `Optional` **minimum**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:241_

---

### multipleOf

• `Optional` **multipleOf**: number

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:238_

---

### not

• `Optional` **not**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:228_

---

### nullable

• `Optional` **nullable**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:215_

---

### oneOf

• `Optional` **oneOf**: ([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:226_

---

### pattern

• `Optional` **pattern**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:245_

---

### properties

• `Optional` **properties**: { [propertyName:string]: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md); }

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:230_

---

### readOnly

• `Optional` **readOnly**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:217_

---

### required

• `Optional` **required**: string[]

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:251_

---

### title

• `Optional` **title**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:237_

---

### type

• `Optional` **type**: string

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:224_

---

### uniqueItems

• `Optional` **uniqueItems**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:248_

---

### writeOnly

• `Optional` **writeOnly**: boolean

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:218_

---

### xml

• `Optional` **xml**: [XmlObject](xmlobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:219_
