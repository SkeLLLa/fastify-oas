[fastify-oas](../README.md) › [Schema](schema.md)

# Interface: Schema

## Hierarchy

* object

  ↳ **Schema**

## Index

### Properties

* [$ref](schema.md#optional-ref)
* [additionalProperties](schema.md#optional-additionalproperties)
* [allOf](schema.md#optional-allof)
* [default](schema.md#optional-default)
* [description](schema.md#optional-description)
* [discriminator](schema.md#optional-discriminator)
* [enum](schema.md#optional-enum)
* [example](schema.md#optional-example)
* [exclusiveMaximum](schema.md#optional-exclusivemaximum)
* [exclusiveMinimum](schema.md#optional-exclusiveminimum)
* [externalDocs](schema.md#optional-externaldocs)
* [format](schema.md#optional-format)
* [items](schema.md#optional-items)
* [maxItems](schema.md#optional-maxitems)
* [maxLength](schema.md#optional-maxlength)
* [maxProperties](schema.md#optional-maxproperties)
* [maximum](schema.md#optional-maximum)
* [minItems](schema.md#optional-minitems)
* [minLength](schema.md#optional-minlength)
* [minProperties](schema.md#optional-minproperties)
* [minimum](schema.md#optional-minimum)
* [multipleOf](schema.md#optional-multipleof)
* [pattern](schema.md#optional-pattern)
* [properties](schema.md#optional-properties)
* [readOnly](schema.md#optional-readonly)
* [required](schema.md#optional-required)
* [title](schema.md#optional-title)
* [type](schema.md#optional-type)
* [uniqueItems](schema.md#optional-uniqueitems)
* [xml](schema.md#optional-xml)

## Properties

### `Optional` $ref

• **$ref**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:177

___

### `Optional` additionalProperties

• **additionalProperties**? : *[Schema](schema.md) | boolean*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:179

___

### `Optional` allOf

• **allOf**? : *[Schema](schema.md)[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:178

___

### `Optional` default

• **default**? : *any*

*Inherited from __type.default*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:158

___

### `Optional` description

• **description**? : *string*

*Inherited from __type.description*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:157

___

### `Optional` discriminator

• **discriminator**? : *string*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:181

___

### `Optional` enum

• **enum**? : *any[]*

*Inherited from __type.enum*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:172

___

### `Optional` example

• **example**? : *any*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:185

___

### `Optional` exclusiveMaximum

• **exclusiveMaximum**? : *boolean*

*Inherited from __type.exclusiveMaximum*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:161

___

### `Optional` exclusiveMinimum

• **exclusiveMinimum**? : *boolean*

*Inherited from __type.exclusiveMinimum*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:163

___

### `Optional` externalDocs

• **externalDocs**? : *[ExternalDocs](externaldocs.md)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:184

___

### `Optional` format

• **format**? : *string*

*Inherited from __type.format*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:155

___

### `Optional` items

• **items**? : *[Schema](schema.md) | [Schema](schema.md)[]*

*Inherited from __type.items*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:173

___

### `Optional` maxItems

• **maxItems**? : *number*

*Inherited from __type.maxItems*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:167

___

### `Optional` maxLength

• **maxLength**? : *number*

*Inherited from __type.maxLength*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:164

___

### `Optional` maxProperties

• **maxProperties**? : *number*

*Inherited from __type.maxProperties*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:170

___

### `Optional` maximum

• **maximum**? : *number*

*Inherited from __type.maximum*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:160

___

### `Optional` minItems

• **minItems**? : *number*

*Inherited from __type.minItems*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:168

___

### `Optional` minLength

• **minLength**? : *number*

*Inherited from __type.minLength*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:165

___

### `Optional` minProperties

• **minProperties**? : *number*

*Inherited from __type.minProperties*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:171

___

### `Optional` minimum

• **minimum**? : *number*

*Inherited from __type.minimum*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:162

___

### `Optional` multipleOf

• **multipleOf**? : *number*

*Inherited from __type.multipleOf*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:159

___

### `Optional` pattern

• **pattern**? : *string*

*Inherited from __type.pattern*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:166

___

### `Optional` properties

• **properties**? : *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:180

#### Type declaration:

* \[ **propertyName**: *string*\]: [Schema](schema.md)

___

### `Optional` readOnly

• **readOnly**? : *boolean*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:182

___

### `Optional` required

• **required**? : *string[]*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:186

___

### `Optional` title

• **title**? : *string*

*Inherited from __type.title*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:156

___

### `Optional` type

• **type**? : *[ParameterType](../README.md#parametertype)*

*Inherited from __type.type*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:154

___

### `Optional` uniqueItems

• **uniqueItems**? : *boolean*

*Inherited from __type.uniqueItems*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:169

___

### `Optional` xml

• **xml**? : *[XML](xml.md)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:183
