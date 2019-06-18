[fastify-oas](../README.md) > [SchemaObject](../interfaces/schemaobject.md)

# Interface: SchemaObject

## Hierarchy

 [ISpecificationExtension](ispecificationextension.md)

**↳ SchemaObject**

## Indexable

\[extensionName: `string`\]:&nbsp;`any`
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

---

## Properties

<a id="additionalproperties"></a>

### `<Optional>` additionalProperties

**● additionalProperties**: *`false` \| `true` \| [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:233*

___
<a id="allof"></a>

### `<Optional>` allOf

**● allOf**: *([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:225*

___
<a id="anyof"></a>

### `<Optional>` anyOf

**● anyOf**: *([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:227*

___
<a id="default"></a>

### `<Optional>` default

**● default**: *`any`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:236*

___
<a id="deprecated"></a>

### `<Optional>` deprecated

**● deprecated**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:223*

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:234*

___
<a id="discriminator"></a>

### `<Optional>` discriminator

**● discriminator**: *[DiscriminatorObject](discriminatorobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:216*

___
<a id="enum"></a>

### `<Optional>` enum

**● enum**: *`any`[]*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:252*

___
<a id="example"></a>

### `<Optional>` example

**● example**: *`any`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:221*

___
<a id="examples"></a>

### `<Optional>` examples

**● examples**: *`any`[]*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:222*

___
<a id="exclusivemaximum"></a>

### `<Optional>` exclusiveMaximum

**● exclusiveMaximum**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:240*

___
<a id="exclusiveminimum"></a>

### `<Optional>` exclusiveMinimum

**● exclusiveMinimum**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:242*

___
<a id="externaldocs"></a>

### `<Optional>` externalDocs

**● externalDocs**: *[ExternalDocumentationObject](externaldocumentationobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:220*

___
<a id="format"></a>

### `<Optional>` format

**● format**: *`string`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:235*

___
<a id="items"></a>

### `<Optional>` items

**● items**: *[SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:229*

___
<a id="maxitems"></a>

### `<Optional>` maxItems

**● maxItems**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:246*

___
<a id="maxlength"></a>

### `<Optional>` maxLength

**● maxLength**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:243*

___
<a id="maxproperties"></a>

### `<Optional>` maxProperties

**● maxProperties**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:249*

___
<a id="maximum"></a>

### `<Optional>` maximum

**● maximum**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:239*

___
<a id="minitems"></a>

### `<Optional>` minItems

**● minItems**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:247*

___
<a id="minlength"></a>

### `<Optional>` minLength

**● minLength**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:244*

___
<a id="minproperties"></a>

### `<Optional>` minProperties

**● minProperties**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:250*

___
<a id="minimum"></a>

### `<Optional>` minimum

**● minimum**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:241*

___
<a id="multipleof"></a>

### `<Optional>` multipleOf

**● multipleOf**: *`number`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:238*

___
<a id="not"></a>

### `<Optional>` not

**● not**: *[SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:228*

___
<a id="nullable"></a>

### `<Optional>` nullable

**● nullable**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:215*

___
<a id="oneof"></a>

### `<Optional>` oneOf

**● oneOf**: *([SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md))[]*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:226*

___
<a id="pattern"></a>

### `<Optional>` pattern

**● pattern**: *`string`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:245*

___
<a id="properties"></a>

### `<Optional>` properties

**● properties**: *`object`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:230*

#### Type declaration

[propertyName: `string`]: [SchemaObject](schemaobject.md) \| [ReferenceObject](referenceobject.md)

___
<a id="readonly"></a>

### `<Optional>` readOnly

**● readOnly**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:217*

___
<a id="required"></a>

### `<Optional>` required

**● required**: *`string`[]*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:251*

___
<a id="title"></a>

### `<Optional>` title

**● title**: *`string`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:237*

___
<a id="type"></a>

### `<Optional>` type

**● type**: *`string`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:224*

___
<a id="uniqueitems"></a>

### `<Optional>` uniqueItems

**● uniqueItems**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:248*

___
<a id="writeonly"></a>

### `<Optional>` writeOnly

**● writeOnly**: *`boolean`*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:218*

___
<a id="xml"></a>

### `<Optional>` xml

**● xml**: *[XmlObject](xmlobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:219*

___

