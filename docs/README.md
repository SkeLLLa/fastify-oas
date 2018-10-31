
#  fastify-oas

## Index

### Modules

* ["fastify"](modules/_fastify_.md)
* [fastifyOAS](modules/fastifyoas.md)

### Classes

* [Server](classes/server.md)
* [ServerVariable](classes/servervariable.md)
* [SpecificationExtension](classes/specificationextension.md)

### Interfaces

* [ApiKeySecurity](interfaces/apikeysecurity.md)
* [BaseOAuthSecuirty](interfaces/baseoauthsecuirty.md)
* [BaseParameter](interfaces/baseparameter.md)
* [BaseParameterObject](interfaces/baseparameterobject.md)
* [BaseSchema](interfaces/baseschema.md)
* [BaseSecurity](interfaces/basesecurity.md)
* [BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md)
* [BodyParameter](interfaces/bodyparameter.md)
* [CallbackObject](interfaces/callbackobject.md)
* [CallbacksObject](interfaces/callbacksobject.md)
* [ComponentsObject](interfaces/componentsobject.md)
* [Contact](interfaces/contact.md)
* [ContactObject](interfaces/contactobject.md)
* [ContentObject](interfaces/contentobject.md)
* [DiscriminatorObject](interfaces/discriminatorobject.md)
* [EncodingObject](interfaces/encodingobject.md)
* [EncodingPropertyObject](interfaces/encodingpropertyobject.md)
* [ExampleObject](interfaces/exampleobject.md)
* [ExamplesObject](interfaces/examplesobject.md)
* [ExternalDocs](interfaces/externaldocs.md)
* [ExternalDocumentationObject](interfaces/externaldocumentationobject.md)
* [FormDataParameter](interfaces/formdataparameter.md)
* [Header](interfaces/header.md)
* [HeaderObject](interfaces/headerobject.md)
* [HeaderParameter](interfaces/headerparameter.md)
* [HeadersObject](interfaces/headersobject.md)
* [ISpecificationExtension](interfaces/ispecificationextension.md)
* [Info](interfaces/info.md)
* [InfoObject](interfaces/infoobject.md)
* [License](interfaces/license.md)
* [LicenseObject](interfaces/licenseobject.md)
* [LinkObject](interfaces/linkobject.md)
* [LinkParametersObject](interfaces/linkparametersobject.md)
* [LinksObject](interfaces/linksobject.md)
* [MediaTypeObject](interfaces/mediatypeobject.md)
* [OAuth2AccessCodeSecurity](interfaces/oauth2accesscodesecurity.md)
* [OAuth2ApplicationSecurity](interfaces/oauth2applicationsecurity.md)
* [OAuth2ImplicitSecurity](interfaces/oauth2implicitsecurity.md)
* [OAuth2PasswordSecurity](interfaces/oauth2passwordsecurity.md)
* [OAuthFlowObject](interfaces/oauthflowobject.md)
* [OAuthFlowsObject](interfaces/oauthflowsobject.md)
* [OAuthScope](interfaces/oauthscope.md)
* [OpenAPIObject](interfaces/openapiobject.md)
* [Operation](interfaces/operation.md)
* [OperationObject](interfaces/operationobject.md)
* [ParameterObject](interfaces/parameterobject.md)
* [Path](interfaces/path.md)
* [PathItemObject](interfaces/pathitemobject.md)
* [PathParameter](interfaces/pathparameter.md)
* [PathsObject](interfaces/pathsobject.md)
* [QueryParameter](interfaces/queryparameter.md)
* [Reference](interfaces/reference.md)
* [ReferenceObject](interfaces/referenceobject.md)
* [RequestBodyObject](interfaces/requestbodyobject.md)
* [Response](interfaces/response.md)
* [ResponseObject](interfaces/responseobject.md)
* [ResponsesObject](interfaces/responsesobject.md)
* [Schema](interfaces/schema.md)
* [SchemaObject](interfaces/schemaobject.md)
* [SchemasObject](interfaces/schemasobject.md)
* [ScopesObject](interfaces/scopesobject.md)
* [SecurityRequirementObject](interfaces/securityrequirementobject.md)
* [SecuritySchemeObject](interfaces/securityschemeobject.md)
* [ServerObject](interfaces/serverobject.md)
* [ServerVariableObject](interfaces/servervariableobject.md)
* [Spec](interfaces/spec.md)
* [Tag](interfaces/tag.md)
* [TagObject](interfaces/tagobject.md)
* [XML](interfaces/xml.md)
* [XmlObject](interfaces/xmlobject.md)

### Type aliases

* [Parameter](#parameter)
* [ParameterLocation](#parameterlocation)
* [ParameterStyle](#parameterstyle)
* [PathObject](#pathobject)
* [Security](#security)
* [SecuritySchemeType](#securityschemetype)

### Functions

* [addExtension](#addextension)
* [getExtension](#getextension)
* [getPath](#getpath)

---

## Type aliases

<a id="parameter"></a>

###  Parameter

**Ƭ Parameter**: * [BodyParameter](interfaces/bodyparameter.md) &#124; [FormDataParameter](interfaces/formdataparameter.md) &#124; [QueryParameter](interfaces/queryparameter.md) &#124; [PathParameter](interfaces/pathparameter.md) &#124; [HeaderParameter](interfaces/headerparameter.md)
*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:73*

___
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
<a id="security"></a>

###  Security

**Ƭ Security**: * [BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md) &#124; [OAuth2AccessCodeSecurity](interfaces/oauth2accesscodesecurity.md) &#124; [OAuth2ApplicationSecurity](interfaces/oauth2applicationsecurity.md) &#124; [OAuth2ImplicitSecurity](interfaces/oauth2implicitsecurity.md) &#124; [OAuth2PasswordSecurity](interfaces/oauth2passwordsecurity.md) &#124; [ApiKeySecurity](interfaces/apikeysecurity.md)
*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:211*

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

▸ **addExtension**(obj: *[ISpecificationExtension](interfaces/ispecificationextension.md)*, extensionName: *`string`*, extension: *`any`*): `void`

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:3*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | [ISpecificationExtension](interfaces/ispecificationextension.md) |
| extensionName | `string` |
| extension | `any` |

**Returns:** `void`

___
<a id="getextension"></a>

###  getExtension

▸ **getExtension**(obj: *[ISpecificationExtension](interfaces/ispecificationextension.md)*, extensionName: *`string`*): `any`

*Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:2*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | [ISpecificationExtension](interfaces/ispecificationextension.md) |
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

