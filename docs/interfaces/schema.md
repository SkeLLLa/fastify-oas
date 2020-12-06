**[fastify-oas](../README.md)**

> [Globals](../README.md) / Schema

# Interface: Schema

## Hierarchy

- { default?: any ; description?: string ; enum?: any[] ; exclusiveMaximum?: boolean ; exclusiveMinimum?: boolean ; format?: string ; items?: [Schema](schema.md) \| [Schema](schema.md)[] ; maxItems?: number ; maxLength?: number ; maxProperties?: number ; maximum?: number ; minItems?: number ; minLength?: number ; minProperties?: number ; minimum?: number ; multipleOf?: number ; pattern?: string ; title?: string ; type?: [ParameterType](../README.md#parametertype) ; uniqueItems?: boolean }

  ↳ **Schema**

## Index

### Properties

- [$ref](schema.md#$ref)
- [additionalProperties](schema.md#additionalproperties)
- [allOf](schema.md#allof)
- [default](schema.md#default)
- [description](schema.md#description)
- [discriminator](schema.md#discriminator)
- [enum](schema.md#enum)
- [example](schema.md#example)
- [exclusiveMaximum](schema.md#exclusivemaximum)
- [exclusiveMinimum](schema.md#exclusiveminimum)
- [externalDocs](schema.md#externaldocs)
- [format](schema.md#format)
- [items](schema.md#items)
- [maxItems](schema.md#maxitems)
- [maxLength](schema.md#maxlength)
- [maxProperties](schema.md#maxproperties)
- [maximum](schema.md#maximum)
- [minItems](schema.md#minitems)
- [minLength](schema.md#minlength)
- [minProperties](schema.md#minproperties)
- [minimum](schema.md#minimum)
- [multipleOf](schema.md#multipleof)
- [pattern](schema.md#pattern)
- [properties](schema.md#properties)
- [readOnly](schema.md#readonly)
- [required](schema.md#required)
- [title](schema.md#title)
- [type](schema.md#type)
- [uniqueItems](schema.md#uniqueitems)
- [xml](schema.md#xml)

## Properties

### $ref

• `Optional` **$ref**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:177_

---

### additionalProperties

• `Optional` **additionalProperties**: [Schema](schema.md) \| boolean

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:179_

---

### allOf

• `Optional` **allOf**: [Schema](schema.md)[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:178_

---

### default

• `Optional` **default**: any

_Inherited from \_\_type.default_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:158_

---

### description

• `Optional` **description**: string

_Inherited from \_\_type.description_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:157_

---

### discriminator

• `Optional` **discriminator**: string

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:181_

---

### enum

• `Optional` **enum**: any[]

_Inherited from \_\_type.enum_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:172_

---

### example

• `Optional` **example**: any

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:185_

---

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: boolean

_Inherited from \_\_type.exclusiveMaximum_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:161_

---

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: boolean

_Inherited from \_\_type.exclusiveMinimum_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:163_

---

### externalDocs

• `Optional` **externalDocs**: [ExternalDocs](externaldocs.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:184_

---

### format

• `Optional` **format**: string

_Inherited from \_\_type.format_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:155_

---

### items

• `Optional` **items**: [Schema](schema.md) \| [Schema](schema.md)[]

_Inherited from \_\_type.items_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:173_

---

### maxItems

• `Optional` **maxItems**: number

_Inherited from \_\_type.maxItems_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:167_

---

### maxLength

• `Optional` **maxLength**: number

_Inherited from \_\_type.maxLength_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:164_

---

### maxProperties

• `Optional` **maxProperties**: number

_Inherited from \_\_type.maxProperties_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:170_

---

### maximum

• `Optional` **maximum**: number

_Inherited from \_\_type.maximum_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:160_

---

### minItems

• `Optional` **minItems**: number

_Inherited from \_\_type.minItems_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:168_

---

### minLength

• `Optional` **minLength**: number

_Inherited from \_\_type.minLength_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:165_

---

### minProperties

• `Optional` **minProperties**: number

_Inherited from \_\_type.minProperties_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:171_

---

### minimum

• `Optional` **minimum**: number

_Inherited from \_\_type.minimum_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:162_

---

### multipleOf

• `Optional` **multipleOf**: number

_Inherited from \_\_type.multipleOf_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:159_

---

### pattern

• `Optional` **pattern**: string

_Inherited from \_\_type.pattern_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:166_

---

### properties

• `Optional` **properties**: { [propertyName:string]: [Schema](schema.md); }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:180_

---

### readOnly

• `Optional` **readOnly**: boolean

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:182_

---

### required

• `Optional` **required**: string[]

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:186_

---

### title

• `Optional` **title**: string

_Inherited from \_\_type.title_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:156_

---

### type

• `Optional` **type**: [ParameterType](../README.md#parametertype)

_Inherited from \_\_type.type_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:154_

---

### uniqueItems

• `Optional` **uniqueItems**: boolean

_Inherited from \_\_type.uniqueItems_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:169_

---

### xml

• `Optional` **xml**: [XML](xml.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:183_
