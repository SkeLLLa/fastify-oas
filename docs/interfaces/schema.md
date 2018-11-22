[fastify-oas](../README.md) > [Schema](../interfaces/schema.md)

# Interface: Schema

## Hierarchy

 [BaseSchema](baseschema.md)

**↳ Schema**

## Index

### Properties

* [$ref](schema.md#_ref)
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

---

## Properties

<a id="_ref"></a>

### `<Optional>` $ref

**● $ref**: *`string`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:147*

___
<a id="additionalproperties"></a>

### `<Optional>` additionalProperties

**● additionalProperties**: *[Schema](schema.md)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:149*

___
<a id="allof"></a>

### `<Optional>` allOf

**● allOf**: *[Schema](schema.md)[]*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:148*

___
<a id="default"></a>

### `<Optional>` default

**● default**: * `string` &#124; `boolean` &#124; `number` &#124; `__type`
*

*Inherited from [BaseSchema](baseschema.md).[default](baseschema.md#default)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:127*

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[description](baseschema.md#description)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:126*

___
<a id="discriminator"></a>

### `<Optional>` discriminator

**● discriminator**: *`string`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:151*

___
<a id="enum"></a>

### `<Optional>` enum

**● enum**: *`Array`< `string` &#124; `boolean` &#124; `number` &#124; `__type`>*

*Inherited from [BaseSchema](baseschema.md).[enum](baseschema.md#enum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:141*

___
<a id="example"></a>

### `<Optional>` example

**● example**: *`any`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:155*

___
<a id="exclusivemaximum"></a>

### `<Optional>` exclusiveMaximum

**● exclusiveMaximum**: *`boolean`*

*Inherited from [BaseSchema](baseschema.md).[exclusiveMaximum](baseschema.md#exclusivemaximum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:130*

___
<a id="exclusiveminimum"></a>

### `<Optional>` exclusiveMinimum

**● exclusiveMinimum**: *`boolean`*

*Inherited from [BaseSchema](baseschema.md).[exclusiveMinimum](baseschema.md#exclusiveminimum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:132*

___
<a id="externaldocs"></a>

### `<Optional>` externalDocs

**● externalDocs**: *[ExternalDocs](externaldocs.md)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:154*

___
<a id="format"></a>

### `<Optional>` format

**● format**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[format](baseschema.md#format)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:124*

___
<a id="items"></a>

### `<Optional>` items

**● items**: * [Schema](schema.md) &#124; [Schema](schema.md)[]
*

*Inherited from [BaseSchema](baseschema.md).[items](baseschema.md#items)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:143*

___
<a id="maxitems"></a>

### `<Optional>` maxItems

**● maxItems**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maxItems](baseschema.md#maxitems)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:136*

___
<a id="maxlength"></a>

### `<Optional>` maxLength

**● maxLength**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maxLength](baseschema.md#maxlength)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:133*

___
<a id="maxproperties"></a>

### `<Optional>` maxProperties

**● maxProperties**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maxProperties](baseschema.md#maxproperties)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:139*

___
<a id="maximum"></a>

### `<Optional>` maximum

**● maximum**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maximum](baseschema.md#maximum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:129*

___
<a id="minitems"></a>

### `<Optional>` minItems

**● minItems**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minItems](baseschema.md#minitems)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:137*

___
<a id="minlength"></a>

### `<Optional>` minLength

**● minLength**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minLength](baseschema.md#minlength)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:134*

___
<a id="minproperties"></a>

### `<Optional>` minProperties

**● minProperties**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minProperties](baseschema.md#minproperties)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:140*

___
<a id="minimum"></a>

### `<Optional>` minimum

**● minimum**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minimum](baseschema.md#minimum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:131*

___
<a id="multipleof"></a>

### `<Optional>` multipleOf

**● multipleOf**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[multipleOf](baseschema.md#multipleof)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:128*

___
<a id="pattern"></a>

### `<Optional>` pattern

**● pattern**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[pattern](baseschema.md#pattern)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:135*

___
<a id="properties"></a>

### `<Optional>` properties

**● properties**: *`object`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:150*

#### Type declaration

[propertyName: `string`]: [Schema](schema.md)

___
<a id="readonly"></a>

### `<Optional>` readOnly

**● readOnly**: *`boolean`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:152*

___
<a id="required"></a>

### `<Optional>` required

**● required**: *`string`[]*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:156*

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[title](baseschema.md#title)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:125*

___
<a id="type"></a>

### `<Optional>` type

**● type**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[type](baseschema.md#type)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:142*

___
<a id="uniqueitems"></a>

### `<Optional>` uniqueItems

**● uniqueItems**: *`boolean`*

*Inherited from [BaseSchema](baseschema.md).[uniqueItems](baseschema.md#uniqueitems)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:138*

___
<a id="xml"></a>

### `<Optional>` xml

**● xml**: *[XML](xml.md)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:153*

___

