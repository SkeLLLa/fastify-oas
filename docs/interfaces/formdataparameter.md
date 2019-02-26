[fastify-oas](../README.md) > [FormDataParameter](../interfaces/formdataparameter.md)

# Interface: FormDataParameter

## Hierarchy

 [BaseParameter](baseparameter.md)

 [BaseSchema](baseschema.md)

**↳ FormDataParameter**

## Index

### Properties

* [allowEmptyValue](formdataparameter.md#allowemptyvalue)
* [collectionFormat](formdataparameter.md#collectionformat)
* [default](formdataparameter.md#default)
* [description](formdataparameter.md#description)
* [enum](formdataparameter.md#enum)
* [exclusiveMaximum](formdataparameter.md#exclusivemaximum)
* [exclusiveMinimum](formdataparameter.md#exclusiveminimum)
* [format](formdataparameter.md#format)
* [in](formdataparameter.md#in)
* [items](formdataparameter.md#items)
* [maxItems](formdataparameter.md#maxitems)
* [maxLength](formdataparameter.md#maxlength)
* [maxProperties](formdataparameter.md#maxproperties)
* [maximum](formdataparameter.md#maximum)
* [minItems](formdataparameter.md#minitems)
* [minLength](formdataparameter.md#minlength)
* [minProperties](formdataparameter.md#minproperties)
* [minimum](formdataparameter.md#minimum)
* [multipleOf](formdataparameter.md#multipleof)
* [name](formdataparameter.md#name)
* [pattern](formdataparameter.md#pattern)
* [required](formdataparameter.md#required)
* [title](formdataparameter.md#title)
* [type](formdataparameter.md#type)
* [uniqueItems](formdataparameter.md#uniqueitems)

---

## Properties

<a id="allowemptyvalue"></a>

### `<Optional>` allowEmptyValue

**● allowEmptyValue**: *`boolean`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:75*

___
<a id="collectionformat"></a>

### `<Optional>` collectionFormat

**● collectionFormat**: *`string`*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:74*

___
<a id="default"></a>

### `<Optional>` default

**● default**: *`string` \| `boolean` \| `number` \| `__type`*

*Inherited from [BaseSchema](baseschema.md).[default](baseschema.md#default)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:132*

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Inherited from [BaseParameter](baseparameter.md).[description](baseparameter.md#description)*

*Overrides [BaseSchema](baseschema.md).[description](baseschema.md#description)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:46*

___
<a id="enum"></a>

### `<Optional>` enum

**● enum**: *`Array`<`string` \| `boolean` \| `number` \| `__type`>*

*Inherited from [BaseSchema](baseschema.md).[enum](baseschema.md#enum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:146*

___
<a id="exclusivemaximum"></a>

### `<Optional>` exclusiveMaximum

**● exclusiveMaximum**: *`boolean`*

*Inherited from [BaseSchema](baseschema.md).[exclusiveMaximum](baseschema.md#exclusivemaximum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:135*

___
<a id="exclusiveminimum"></a>

### `<Optional>` exclusiveMinimum

**● exclusiveMinimum**: *`boolean`*

*Inherited from [BaseSchema](baseschema.md).[exclusiveMinimum](baseschema.md#exclusiveminimum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:137*

___
<a id="format"></a>

### `<Optional>` format

**● format**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[format](baseschema.md#format)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:129*

___
<a id="in"></a>

###  in

**● in**: *"formData"*

*Overrides [BaseParameter](baseparameter.md).[in](baseparameter.md#in)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:72*

___
<a id="items"></a>

### `<Optional>` items

**● items**: *[Schema](schema.md) \| [Schema](schema.md)[]*

*Inherited from [BaseSchema](baseschema.md).[items](baseschema.md#items)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:148*

___
<a id="maxitems"></a>

### `<Optional>` maxItems

**● maxItems**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maxItems](baseschema.md#maxitems)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:141*

___
<a id="maxlength"></a>

### `<Optional>` maxLength

**● maxLength**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maxLength](baseschema.md#maxlength)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:138*

___
<a id="maxproperties"></a>

### `<Optional>` maxProperties

**● maxProperties**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maxProperties](baseschema.md#maxproperties)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:144*

___
<a id="maximum"></a>

### `<Optional>` maximum

**● maximum**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[maximum](baseschema.md#maximum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:134*

___
<a id="minitems"></a>

### `<Optional>` minItems

**● minItems**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minItems](baseschema.md#minitems)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:142*

___
<a id="minlength"></a>

### `<Optional>` minLength

**● minLength**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minLength](baseschema.md#minlength)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:139*

___
<a id="minproperties"></a>

### `<Optional>` minProperties

**● minProperties**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minProperties](baseschema.md#minproperties)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:145*

___
<a id="minimum"></a>

### `<Optional>` minimum

**● minimum**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[minimum](baseschema.md#minimum)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:136*

___
<a id="multipleof"></a>

### `<Optional>` multipleOf

**● multipleOf**: *`number`*

*Inherited from [BaseSchema](baseschema.md).[multipleOf](baseschema.md#multipleof)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:133*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from [BaseParameter](baseparameter.md).[name](baseparameter.md#name)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:43*

___
<a id="pattern"></a>

### `<Optional>` pattern

**● pattern**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[pattern](baseschema.md#pattern)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:140*

___
<a id="required"></a>

### `<Optional>` required

**● required**: *`boolean`*

*Inherited from [BaseParameter](baseparameter.md).[required](baseparameter.md#required)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:45*

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Inherited from [BaseSchema](baseschema.md).[title](baseschema.md#title)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:130*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Overrides [BaseSchema](baseschema.md).[type](baseschema.md#type)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:73*

___
<a id="uniqueitems"></a>

### `<Optional>` uniqueItems

**● uniqueItems**: *`boolean`*

*Inherited from [BaseSchema](baseschema.md).[uniqueItems](baseschema.md#uniqueitems)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:143*

___

