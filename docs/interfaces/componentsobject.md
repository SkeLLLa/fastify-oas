[fastify-oas](../README.md) › [ComponentsObject](componentsobject.md)

# Interface: ComponentsObject

## Hierarchy

* [ISpecificationExtension](ispecificationextension.md)

  ↳ **ComponentsObject**

## Indexable

* \[ **extensionName**: *string*\]: any

## Index

### Properties

* [callbacks](componentsobject.md#optional-callbacks)
* [examples](componentsobject.md#optional-examples)
* [headers](componentsobject.md#optional-headers)
* [links](componentsobject.md#optional-links)
* [parameters](componentsobject.md#optional-parameters)
* [requestBodies](componentsobject.md#optional-requestbodies)
* [responses](componentsobject.md#optional-responses)
* [schemas](componentsobject.md#optional-schemas)
* [securitySchemes](componentsobject.md#optional-securityschemes)

## Properties

### `Optional` callbacks

• **callbacks**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:68

#### Type declaration:

* \[ **callback**: *string*\]: [CallbackObject](callbackobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` examples

• **examples**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:53

#### Type declaration:

* \[ **example**: *string*\]: [ExampleObject](exampleobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` headers

• **headers**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:59

#### Type declaration:

* \[ **header**: *string*\]: [HeaderObject](headerobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` links

• **links**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:65

#### Type declaration:

* \[ **link**: *string*\]: [LinkObject](linkobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` parameters

• **parameters**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:50

#### Type declaration:

* \[ **parameter**: *string*\]: [ParameterObject](parameterobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` requestBodies

• **requestBodies**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:56

#### Type declaration:

* \[ **request**: *string*\]: [RequestBodyObject](requestbodyobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` responses

• **responses**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:47

#### Type declaration:

* \[ **response**: *string*\]: [ResponseObject](responseobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` schemas

• **schemas**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:44

#### Type declaration:

* \[ **schema**: *string*\]: [SchemaObject](schemaobject.md) | [ReferenceObject](referenceobject.md)

___

### `Optional` securitySchemes

• **securitySchemes**? : *object*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:62

#### Type declaration:

* \[ **securityScheme**: *string*\]: [SecuritySchemeObject](securityschemeobject.md) | [ReferenceObject](referenceobject.md)
