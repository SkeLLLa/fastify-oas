> **[fastify-oas](README.md)**

### Index

#### Modules

* ["fastify"](modules/_fastify_.md)
* [fastifyOAS](modules/fastifyoas.md)

#### Classes

* [Server](classes/server.md)
* [ServerVariable](classes/servervariable.md)
* [SpecificationExtension](classes/specificationextension.md)

#### Interfaces

* [ApiKeySecurity](interfaces/apikeysecurity.md)
* [BaseOAuthSecurity](interfaces/baseoauthsecurity.md)
* [BaseParameterObject](interfaces/baseparameterobject.md)
* [BaseSecurity](interfaces/basesecurity.md)
* [BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md)
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
* [Header](interfaces/header.md)
* [HeaderObject](interfaces/headerobject.md)
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
* [PathsObject](interfaces/pathsobject.md)
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

#### Type aliases

* [BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter)
* [BaseParameter](README.md#baseparameter)
* [BaseSchema](README.md#baseschema)
* [BodyParameter](README.md#bodyparameter)
* [FormDataParameter](README.md#formdataparameter)
* [GenericFormat](README.md#genericformat)
* [HeaderParameter](README.md#headerparameter)
* [IntegerFormat](README.md#integerformat)
* [NumberFormat](README.md#numberformat)
* [Parameter](README.md#parameter)
* [ParameterCollectionFormat](README.md#parametercollectionformat)
* [ParameterLocation](README.md#parameterlocation)
* [ParameterStyle](README.md#parameterstyle)
* [ParameterType](README.md#parametertype)
* [PathObject](README.md#pathobject)
* [PathParameter](README.md#pathparameter)
* [QueryParameter](README.md#queryparameter)
* [SchemaFormatConstraints](README.md#schemaformatconstraints)
* [Security](README.md#security)
* [SecuritySchemeType](README.md#securityschemetype)
* [StringFormat](README.md#stringformat)

#### Functions

* [addExtension](README.md#addextension)
* [getExtension](README.md#getextension)
* [getPath](README.md#getpath)
* [isReferenceObject](README.md#isreferenceobject)
* [isSchemaObject](README.md#isschemaobject)

## Type aliases

###  BaseFormatContrainedParameter

Ƭ **BaseFormatContrainedParameter**: *[BaseParameter](README.md#baseparameter) & [SchemaFormatConstraints](README.md#schemaformatconstraints)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:79

___

###  BaseParameter

Ƭ **BaseParameter**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:46

#### Type declaration:

* **description**? : *string*

* **in**: *"body" | "query" | "path" | "header" | "formData" | "body"*

* **name**: *string*

* **required**? : *boolean*

___

###  BaseSchema

Ƭ **BaseSchema**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:153

#### Type declaration:

* **default**? : *any*

* **description**? : *string*

* **enum**? : *any[]*

* **exclusiveMaximum**? : *boolean*

* **exclusiveMinimum**? : *boolean*

* **format**? : *string*

* **items**? : *[Schema](interfaces/schema.md) | [Schema](interfaces/schema.md)[]*

* **maxItems**? : *number*

* **maxLength**? : *number*

* **maxProperties**? : *number*

* **maximum**? : *number*

* **minItems**? : *number*

* **minLength**? : *number*

* **minProperties**? : *number*

* **minimum**? : *number*

* **multipleOf**? : *number*

* **pattern**? : *string*

* **title**? : *string*

* **type**? : *[ParameterType](README.md#parametertype)*

* **uniqueItems**? : *boolean*

___

###  BodyParameter

Ƭ **BodyParameter**: *[BaseParameter](README.md#baseparameter) & object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:53

___

###  FormDataParameter

Ƭ **FormDataParameter**: *[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:100

___

###  GenericFormat

Ƭ **GenericFormat**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:58

#### Type declaration:

* **format**? : *string*

* **type**? : *[ParameterType](README.md#parametertype)*

___

###  HeaderParameter

Ƭ **HeaderParameter**: *[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:95

___

###  IntegerFormat

Ƭ **IntegerFormat**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:63

#### Type declaration:

* **format**? : *"int32" | "int64"*

* **type**: *"integer"*

___

###  NumberFormat

Ƭ **NumberFormat**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:68

#### Type declaration:

* **format**? : *"float" | "double"*

* **type**: *"number"*

___

###  Parameter

Ƭ **Parameter**: *[BodyParameter](README.md#bodyparameter) | [FormDataParameter](README.md#formdataparameter) | [QueryParameter](README.md#queryparameter) | [PathParameter](README.md#pathparameter) | [HeaderParameter](README.md#headerparameter)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:108

___

###  ParameterCollectionFormat

Ƭ **ParameterCollectionFormat**: *"csv" | "ssv" | "tsv" | "pipes" | "multi"*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:80

___

###  ParameterLocation

Ƭ **ParameterLocation**: *"query" | "header" | "path" | "cookie"*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:110

___

###  ParameterStyle

Ƭ **ParameterStyle**: *"matrix" | "label" | "form" | "simple" | "spaceDelimited" | "pipeDelimited" | "deepObject"*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:111

___

###  ParameterType

Ƭ **ParameterType**: *"string" | "number" | "integer" | "boolean" | "array" | "object"*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:44

___

###  PathObject

Ƭ **PathObject**: *[PathsObject](interfaces/pathsobject.md)*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:75

___

###  PathParameter

Ƭ **PathParameter**: *[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:89

___

###  QueryParameter

Ƭ **QueryParameter**: *[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:82

___

###  SchemaFormatConstraints

Ƭ **SchemaFormatConstraints**: *[GenericFormat](README.md#genericformat) | [IntegerFormat](README.md#integerformat) | [NumberFormat](README.md#numberformat) | [StringFormat](README.md#stringformat)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:78

___

###  Security

Ƭ **Security**: *[BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md) | [OAuth2AccessCodeSecurity](interfaces/oauth2accesscodesecurity.md) | [OAuth2ApplicationSecurity](interfaces/oauth2applicationsecurity.md) | [OAuth2ImplicitSecurity](interfaces/oauth2implicitsecurity.md) | [OAuth2PasswordSecurity](interfaces/oauth2passwordsecurity.md) | [ApiKeySecurity](interfaces/apikeysecurity.md)*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:248

___

###  SecuritySchemeType

Ƭ **SecuritySchemeType**: *"apiKey" | "http" | "oauth2" | "openIdConnect"*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:271

___

###  StringFormat

Ƭ **StringFormat**: *object*

Defined in node_modules/@types/swagger-schema-official/index.d.ts:73

#### Type declaration:

* **format**? : *`""` | "byte" | "binary" | "date" | "date-time" | "password"*

* **type**: *"string"*

## Functions

###  addExtension

▸ **addExtension**(`obj`: [ISpecificationExtension](interfaces/ispecificationextension.md), `extensionName`: string, `extension`: any): *void*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [ISpecificationExtension](interfaces/ispecificationextension.md) |
`extensionName` | string |
`extension` | any |

**Returns:** *void*

___

###  getExtension

▸ **getExtension**(`obj`: [ISpecificationExtension](interfaces/ispecificationextension.md), `extensionName`: string): *any*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:2

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [ISpecificationExtension](interfaces/ispecificationextension.md) |
`extensionName` | string |

**Returns:** *any*

___

###  getPath

▸ **getPath**(`pathsObject`: [PathsObject](interfaces/pathsobject.md), `path`: string): *[PathItemObject](interfaces/pathitemobject.md) | undefined*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`pathsObject` | [PathsObject](interfaces/pathsobject.md) |
`path` | string |

**Returns:** *[PathItemObject](interfaces/pathitemobject.md) | undefined*

___

###  isReferenceObject

▸ **isReferenceObject**(`obj`: object): *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:213

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *boolean*

___

###  isSchemaObject

▸ **isSchemaObject**(`schema`: [SchemaObject](interfaces/schemaobject.md) | [ReferenceObject](interfaces/referenceobject.md)): *boolean*

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:254

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [SchemaObject](interfaces/schemaobject.md) \| [ReferenceObject](interfaces/referenceobject.md) |

**Returns:** *boolean*