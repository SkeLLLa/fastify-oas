
#  fastify-oas

## Index

### Modules

* [fastifyOAS](modules/fastifyoas.md)

### Interfaces

* [BaseParameterObject](interfaces/baseparameterobject.md)
* [CallbackObject](interfaces/callbackobject.md)
* [CallbacksObject](interfaces/callbacksobject.md)
* [ComponentsObject](interfaces/componentsobject.md)
* [ContactObject](interfaces/contactobject.md)
* [ContentObject](interfaces/contentobject.md)
* [DiscriminatorObject](interfaces/discriminatorobject.md)
* [EncodingObject](interfaces/encodingobject.md)
* [EncodingPropertyObject](interfaces/encodingpropertyobject.md)
* [ExampleObject](interfaces/exampleobject.md)
* [ExamplesObject](interfaces/examplesobject.md)
* [ExternalDocumentationObject](interfaces/externaldocumentationobject.md)
* [HeaderObject](interfaces/headerobject.md)
* [HeadersObject](interfaces/headersobject.md)
* [InfoObject](interfaces/infoobject.md)
* [LicenseObject](interfaces/licenseobject.md)
* [LinkObject](interfaces/linkobject.md)
* [LinkParametersObject](interfaces/linkparametersobject.md)
* [LinksObject](interfaces/linksobject.md)
* [MediaTypeObject](interfaces/mediatypeobject.md)
* [OAuthFlowObject](interfaces/oauthflowobject.md)
* [OAuthFlowsObject](interfaces/oauthflowsobject.md)
* [OpenAPIObject](interfaces/openapiobject.md)
* [OperationObject](interfaces/operationobject.md)
* [ParameterObject](interfaces/parameterobject.md)
* [PathItemObject](interfaces/pathitemobject.md)
* [PathsObject](interfaces/pathsobject.md)
* [ReferenceObject](interfaces/referenceobject.md)
* [RequestBodyObject](interfaces/requestbodyobject.md)
* [ResponseObject](interfaces/responseobject.md)
* [ResponsesObject](interfaces/responsesobject.md)
* [SchemaObject](interfaces/schemaobject.md)
* [SchemasObject](interfaces/schemasobject.md)
* [ScopesObject](interfaces/scopesobject.md)
* [SecurityRequirementObject](interfaces/securityrequirementobject.md)
* [SecuritySchemeObject](interfaces/securityschemeobject.md)
* [ServerObject](interfaces/serverobject.md)
* [ServerVariableObject](interfaces/servervariableobject.md)
* [TagObject](interfaces/tagobject.md)
* [XmlObject](interfaces/xmlobject.md)

### Type aliases

* [ParameterLocation](#parameterlocation)
* [ParameterStyle](#parameterstyle)
* [PathObject](#pathobject)
* [SecuritySchemeType](#securityschemetype)

### Functions

* [addExtension](#addextension)
* [getExtension](#getextension)
* [getPath](#getpath)

---

## Type aliases

<a id="parameterlocation"></a>

###  ParameterLocation

**Ƭ ParameterLocation**: * "query" &#124; "header" &#124; "path" &#124; "cookie"
*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:110*

___
<a id="parameterstyle"></a>

###  ParameterStyle

**Ƭ ParameterStyle**: * "matrix" &#124; "label" &#124; "form" &#124; "simple" &#124; "spaceDelimited" &#124; "pipeDelimited" &#124; "deepObject"
*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:111*

___
<a id="pathobject"></a>

###  PathObject

**Ƭ PathObject**: *[PathsObject](interfaces/pathsobject.md)*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:75*

___
<a id="securityschemetype"></a>

###  SecuritySchemeType

**Ƭ SecuritySchemeType**: * "apiKey" &#124; "http" &#124; "oauth2" &#124; "openIdConnect"
*

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:269*

___

## Functions

<a id="addextension"></a>

###  addExtension

▸ **addExtension**(obj: *`ISpecificationExtension`*, extensionName: *`string`*, extension: *`any`*): `void`

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `ISpecificationExtension` |
| extensionName | `string` |
| extension | `any` |

**Returns:** `void`

___
<a id="getextension"></a>

###  getExtension

▸ **getExtension**(obj: *`ISpecificationExtension`*, extensionName: *`string`*): `any`

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `ISpecificationExtension` |
| extensionName | `string` |

**Returns:** `any`

___
<a id="getpath"></a>

###  getPath

▸ **getPath**(pathsObject: *[PathsObject](interfaces/pathsobject.md)*, path: *`string`*): [PathItemObject](interfaces/pathitemobject.md)

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:76*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pathsObject | [PathsObject](interfaces/pathsobject.md) |
| path | `string` |

**Returns:** [PathItemObject](interfaces/pathitemobject.md)

___

