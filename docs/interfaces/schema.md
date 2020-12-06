**[fastify-oas](../README.md)**

> [Globals](../README.md) / Schema

# Interface: Schema

## Hierarchy

* { default?: any ; description?: string ; enum?: any[] ; exclusiveMaximum?: boolean ; exclusiveMinimum?: boolean ; format?: string ; items?: [Schema](schema.md) \| [Schema](schema.md)[] ; maxItems?: number ; maxLength?: number ; maxProperties?: number ; maximum?: number ; minItems?: number ; minLength?: number ; minProperties?: number ; minimum?: number ; multipleOf?: number ; pattern?: string ; title?: string ; type?: [ParameterType](../README.md#parametertype) ; uniqueItems?: boolean  }

  ↳ **Schema**

## Index

### Properties

* [$ref](schema.md#$ref)
* [additionalProperties](schema.md#additionalproperties)
* [allOf](schema.md#allof)
* [default](schema.md#default)
* [description](schema.md#description)
* [discriminator](schema.md#discriminator)
* [enum](schema.md#enum)
* [example](schema.md#example)
* [exclusiveMaximum](schema.md#exclusivemaximum)
* [exclusiveMinimum](schema.md#exclusiveminimum)
* [externalDocs](schema.md#externaldocs)
* [format](schema.md#format)
* [items](schema.md#items)
* [maxItems](schema.md#maxitems)
* [maxLength](schema.md#maxlength)
* [maxProperties](schema.md#maxproperties)
* [maximum](schema.md#maximum)
* [minItems](schema.md#minitems)
* [minLength](schema.md#minlength)
* [minProperties](schema.md#minproperties)
* [minimum](schema.md#minimum)
* [multipleOf](schema.md#multipleof)
* [pattern](schema.md#pattern)
* [properties](schema.md#properties)
* [readOnly](schema.md#readonly)
* [required](schema.md#required)
* [title](schema.md#title)
* [type](schema.md#type)
* [uniqueItems](schema.md#uniqueitems)
* [xml](schema.md#xml)

## Properties

### $ref

• `Optional` **$ref**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:177*

___

### additionalProperties

• `Optional` **additionalProperties**: [Schema](schema.md) \| boolean

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:179*

___

### allOf

• `Optional` **allOf**: [Schema](schema.md)[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:178*

___

### default

• `Optional` **default**: any

*Inherited from __type.default*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:158*

___

### description

• `Optional` **description**: string

*Inherited from __type.description*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:157*

___

### discriminator

• `Optional` **discriminator**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:181*

___

### enum

• `Optional` **enum**: any[]

*Inherited from __type.enum*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:172*

___

### example

• `Optional` **example**: any

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:185*

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: boolean

*Inherited from __type.exclusiveMaximum*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:161*

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: boolean

*Inherited from __type.exclusiveMinimum*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:163*

___

### externalDocs

• `Optional` **externalDocs**: [ExternalDocs](externaldocs.md)

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:184*

___

### format

• `Optional` **format**: string

*Inherited from __type.format*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:155*

___

### items

• `Optional` **items**: [Schema](schema.md) \| [Schema](schema.md)[]

*Inherited from __type.items*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:173*

___

### maxItems

• `Optional` **maxItems**: number

*Inherited from __type.maxItems*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:167*

___

### maxLength

• `Optional` **maxLength**: number

*Inherited from __type.maxLength*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:164*

___

### maxProperties

• `Optional` **maxProperties**: number

*Inherited from __type.maxProperties*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:170*

___

### maximum

• `Optional` **maximum**: number

*Inherited from __type.maximum*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:160*

___

### minItems

• `Optional` **minItems**: number

*Inherited from __type.minItems*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:168*

___

### minLength

• `Optional` **minLength**: number

*Inherited from __type.minLength*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:165*

___

### minProperties

• `Optional` **minProperties**: number

*Inherited from __type.minProperties*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:171*

___

### minimum

• `Optional` **minimum**: number

*Inherited from __type.minimum*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:162*

___

### multipleOf

• `Optional` **multipleOf**: number

*Inherited from __type.multipleOf*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:159*

___

### pattern

• `Optional` **pattern**: string

*Inherited from __type.pattern*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:166*

___

### properties

• `Optional` **properties**: { [propertyName:string]: [Schema](schema.md);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:180*

___

### readOnly

• `Optional` **readOnly**: boolean

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:182*

___

### required

• `Optional` **required**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:186*

___

### title

• `Optional` **title**: string

*Inherited from __type.title*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:156*

___

### type

• `Optional` **type**: [ParameterType](../README.md#parametertype)

*Inherited from __type.type*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:154*

___

### uniqueItems

• `Optional` **uniqueItems**: boolean

*Inherited from __type.uniqueItems*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:169*

___

### xml

• `Optional` **xml**: [XML](xml.md)

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:183*
