**[fastify-oas](../README.md)**

> [Globals](../README.md) / SchemaObject

# Interface: SchemaObject

## Hierarchy

* [ISpecificationExtension](ispecificationextension.md)

  ↳ **SchemaObject**

## Indexable

▪ [extensionName: string]: any

## Index

### Properties

* [additionalProperties](schemaobject.md#additionalproperties)
* [allOf](schemaobject.md#allof)
* [anyOf](schemaobject.md#anyof)
* [default](schemaobject.md#default)
* [deprecated](schemaobject.md#deprecated)
* [description](schemaobject.md#description)
* [discriminator](schemaobject.md#discriminator)
* [enum](schemaobject.md#enum)
* [example](schemaobject.md#example)
* [examples](schemaobject.md#examples)
* [exclusiveMaximum](schemaobject.md#exclusivemaximum)
* [exclusiveMinimum](schemaobject.md#exclusiveminimum)
* [externalDocs](schemaobject.md#externaldocs)
* [format](schemaobject.md#format)
* [items](schemaobject.md#items)
* [maxItems](schemaobject.md#maxitems)
* [maxLength](schemaobject.md#maxlength)
* [maxProperties](schemaobject.md#maxproperties)
* [maximum](schemaobject.md#maximum)
* [minItems](schemaobject.md#minitems)
* [minLength](schemaobject.md#minlength)
* [minProperties](schemaobject.md#minproperties)
* [minimum](schemaobject.md#minimum)
* [multipleOf](schemaobject.md#multipleof)
* [not](schemaobject.md#not)
* [nullable](schemaobject.md#nullable)
* [oneOf](schemaobject.md#oneof)
* [pattern](schemaobject.md#pattern)
* [properties](schemaobject.md#properties)
* [readOnly](schemaobject.md#readonly)
* [required](schemaobject.md#required)
* [title](schemaobject.md#title)
* [type](schemaobject.md#type)
* [uniqueItems](schemaobject.md#uniqueitems)
* [writeOnly](schemaobject.md#writeonly)
* [xml](schemaobject.md#xml)

## Properties

### additionalProperties

• `Optional` **additionalProperties**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md) \| boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:233*

___

### allOf

• `Optional` **allOf**: ([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:225*

___

### anyOf

• `Optional` **anyOf**: ([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:227*

___

### default

• `Optional` **default**: any

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:236*

___

### deprecated

• `Optional` **deprecated**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:223*

___

### description

• `Optional` **description**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:234*

___

### discriminator

• `Optional` **discriminator**: [DiscriminatorObject](discriminatorobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:216*

___

### enum

• `Optional` **enum**: any[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:252*

___

### example

• `Optional` **example**: any

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:221*

___

### examples

• `Optional` **examples**: any[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:222*

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:240*

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:242*

___

### externalDocs

• `Optional` **externalDocs**: [ExternalDocumentationObject](externaldocumentationobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:220*

___

### format

• `Optional` **format**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:235*

___

### items

• `Optional` **items**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:229*

___

### maxItems

• `Optional` **maxItems**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:246*

___

### maxLength

• `Optional` **maxLength**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:243*

___

### maxProperties

• `Optional` **maxProperties**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:249*

___

### maximum

• `Optional` **maximum**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:239*

___

### minItems

• `Optional` **minItems**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:247*

___

### minLength

• `Optional` **minLength**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:244*

___

### minProperties

• `Optional` **minProperties**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:250*

___

### minimum

• `Optional` **minimum**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:241*

___

### multipleOf

• `Optional` **multipleOf**: number

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:238*

___

### not

• `Optional` **not**: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:228*

___

### nullable

• `Optional` **nullable**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:215*

___

### oneOf

• `Optional` **oneOf**: ([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:226*

___

### pattern

• `Optional` **pattern**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:245*

___

### properties

• `Optional` **properties**: { [propertyName:string]: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md);  }

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:230*

___

### readOnly

• `Optional` **readOnly**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:217*

___

### required

• `Optional` **required**: string[]

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:251*

___

### title

• `Optional` **title**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:237*

___

### type

• `Optional` **type**: string

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:224*

___

### uniqueItems

• `Optional` **uniqueItems**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:248*

___

### writeOnly

• `Optional` **writeOnly**: boolean

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:218*

___

### xml

• `Optional` **xml**: [XmlObject](xmlobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:219*
