[fastify-oas](README.md)

# fastify-oas

## Index

### Modules

- ["fastify"](modules/_fastify_.md)

### Namespaces

- [fastifyOAS](modules/fastifyoas.md)

### Classes

- [Server](classes/server.md)
- [ServerVariable](classes/servervariable.md)
- [SpecificationExtension](classes/specificationextension.md)

### Interfaces

- [ApiKeySecurity](interfaces/apikeysecurity.md)
- [BaseOAuthSecurity](interfaces/baseoauthsecurity.md)
- [BaseParameterObject](interfaces/baseparameterobject.md)
- [BaseSecurity](interfaces/basesecurity.md)
- [BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md)
- [CallbackObject](interfaces/callbackobject.md)
- [CallbacksObject](interfaces/callbacksobject.md)
- [ComponentsObject](interfaces/componentsobject.md)
- [Contact](interfaces/contact.md)
- [ContactObject](interfaces/contactobject.md)
- [ContentObject](interfaces/contentobject.md)
- [DiscriminatorObject](interfaces/discriminatorobject.md)
- [EncodingObject](interfaces/encodingobject.md)
- [EncodingPropertyObject](interfaces/encodingpropertyobject.md)
- [ExampleObject](interfaces/exampleobject.md)
- [ExamplesObject](interfaces/examplesobject.md)
- [ExternalDocs](interfaces/externaldocs.md)
- [ExternalDocumentationObject](interfaces/externaldocumentationobject.md)
- [Header](interfaces/header.md)
- [HeaderObject](interfaces/headerobject.md)
- [HeadersObject](interfaces/headersobject.md)
- [ISpecificationExtension](interfaces/ispecificationextension.md)
- [Info](interfaces/info.md)
- [InfoObject](interfaces/infoobject.md)
- [License](interfaces/license.md)
- [LicenseObject](interfaces/licenseobject.md)
- [LinkObject](interfaces/linkobject.md)
- [LinkParametersObject](interfaces/linkparametersobject.md)
- [LinksObject](interfaces/linksobject.md)
- [MediaTypeObject](interfaces/mediatypeobject.md)
- [OAuth2AccessCodeSecurity](interfaces/oauth2accesscodesecurity.md)
- [OAuth2ApplicationSecurity](interfaces/oauth2applicationsecurity.md)
- [OAuth2ImplicitSecurity](interfaces/oauth2implicitsecurity.md)
- [OAuth2PasswordSecurity](interfaces/oauth2passwordsecurity.md)
- [OAuthFlowObject](interfaces/oauthflowobject.md)
- [OAuthFlowsObject](interfaces/oauthflowsobject.md)
- [OAuthScope](interfaces/oauthscope.md)
- [OpenAPIObject](interfaces/openapiobject.md)
- [Operation](interfaces/operation.md)
- [OperationObject](interfaces/operationobject.md)
- [ParameterObject](interfaces/parameterobject.md)
- [Path](interfaces/path.md)
- [PathItemObject](interfaces/pathitemobject.md)
- [PathsObject](interfaces/pathsobject.md)
- [Reference](interfaces/reference.md)
- [ReferenceObject](interfaces/referenceobject.md)
- [RequestBodyObject](interfaces/requestbodyobject.md)
- [Response](interfaces/response.md)
- [ResponseObject](interfaces/responseobject.md)
- [ResponsesObject](interfaces/responsesobject.md)
- [Schema](interfaces/schema.md)
- [SchemaObject](interfaces/schemaobject.md)
- [SchemasObject](interfaces/schemasobject.md)
- [ScopesObject](interfaces/scopesobject.md)
- [SecurityRequirementObject](interfaces/securityrequirementobject.md)
- [SecuritySchemeObject](interfaces/securityschemeobject.md)
- [ServerObject](interfaces/serverobject.md)
- [ServerVariableObject](interfaces/servervariableobject.md)
- [Spec](interfaces/spec.md)
- [Tag](interfaces/tag.md)
- [TagObject](interfaces/tagobject.md)
- [XML](interfaces/xml.md)
- [XmlObject](interfaces/xmlobject.md)

### Type aliases

- [BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter)
- [BaseParameter](README.md#baseparameter)
- [BaseSchema](README.md#baseschema)
- [BodyParameter](README.md#bodyparameter)
- [FormDataParameter](README.md#formdataparameter)
- [GenericFormat](README.md#genericformat)
- [HeaderParameter](README.md#headerparameter)
- [IntegerFormat](README.md#integerformat)
- [NumberFormat](README.md#numberformat)
- [Parameter](README.md#parameter)
- [ParameterCollectionFormat](README.md#parametercollectionformat)
- [ParameterLocation](README.md#parameterlocation)
- [ParameterStyle](README.md#parameterstyle)
- [ParameterType](README.md#parametertype)
- [PathObject](README.md#pathobject)
- [PathParameter](README.md#pathparameter)
- [QueryParameter](README.md#queryparameter)
- [SchemaFormatConstraints](README.md#schemaformatconstraints)
- [Security](README.md#security)
- [SecuritySchemeType](README.md#securityschemetype)
- [StringFormat](README.md#stringformat)

### Functions

- [addExtension](README.md#addextension)
- [getExtension](README.md#getextension)
- [getPath](README.md#getpath)
- [isReferenceObject](README.md#isreferenceobject)
- [isSchemaObject](README.md#isschemaobject)

## Type aliases

### BaseFormatContrainedParameter

Ƭ **BaseFormatContrainedParameter**: _[BaseParameter](README.md#baseparameter) & [SchemaFormatConstraints](README.md#schemaformatconstraints)_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:79

---

### BaseParameter

Ƭ **BaseParameter**: _object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:46

#### Type declaration:

- **description**? : _string_

- **in**: _"body" | "query" | "path" | "header" | "formData" | "body"_

- **name**: _string_

- **required**? : _boolean_

---

### BaseSchema

Ƭ **BaseSchema**: _object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:153

#### Type declaration:

- **default**? : _any_

- **description**? : _string_

- **enum**? : _any[]_

- **exclusiveMaximum**? : _boolean_

- **exclusiveMinimum**? : _boolean_

- **format**? : _string_

- **items**? : _[Schema](interfaces/schema.md) | [Schema](interfaces/schema.md)[]_

- **maxItems**? : _number_

- **maxLength**? : _number_

- **maxProperties**? : _number_

- **maximum**? : _number_

- **minItems**? : _number_

- **minLength**? : _number_

- **minProperties**? : _number_

- **minimum**? : _number_

- **multipleOf**? : _number_

- **pattern**? : _string_

- **title**? : _string_

- **type**? : _[ParameterType](README.md#parametertype)_

- **uniqueItems**? : _boolean_

---

### BodyParameter

Ƭ **BodyParameter**: _[BaseParameter](README.md#baseparameter) & object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:53

---

### FormDataParameter

Ƭ **FormDataParameter**: _[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:100

---

### GenericFormat

Ƭ **GenericFormat**: _object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:58

#### Type declaration:

- **format**? : _string_

- **type**? : _[ParameterType](README.md#parametertype)_

---

### HeaderParameter

Ƭ **HeaderParameter**: _[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:95

---

### IntegerFormat

Ƭ **IntegerFormat**: _object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:63

#### Type declaration:

- **format**? : _"int32" | "int64"_

- **type**: _"integer"_

---

### NumberFormat

Ƭ **NumberFormat**: _object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:68

#### Type declaration:

- **format**? : _"float" | "double"_

- **type**: _"number"_

---

### Parameter

Ƭ **Parameter**: _[BodyParameter](README.md#bodyparameter) | [FormDataParameter](README.md#formdataparameter) | [QueryParameter](README.md#queryparameter) | [PathParameter](README.md#pathparameter) | [HeaderParameter](README.md#headerparameter)_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:108

---

### ParameterCollectionFormat

Ƭ **ParameterCollectionFormat**: _"csv" | "ssv" | "tsv" | "pipes" | "multi"_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:80

---

### ParameterLocation

Ƭ **ParameterLocation**: _"query" | "header" | "path" | "cookie"_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:110

---

### ParameterStyle

Ƭ **ParameterStyle**: _"matrix" | "label" | "form" | "simple" | "spaceDelimited" | "pipeDelimited" | "deepObject"_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:111

---

### ParameterType

Ƭ **ParameterType**: _"string" | "number" | "integer" | "boolean" | "array" | "object" | "file"_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:44

---

### PathObject

Ƭ **PathObject**: _[PathsObject](interfaces/pathsobject.md)_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:75

---

### PathParameter

Ƭ **PathParameter**: _[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:89

---

### QueryParameter

Ƭ **QueryParameter**: _[BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:82

---

### SchemaFormatConstraints

Ƭ **SchemaFormatConstraints**: _[GenericFormat](README.md#genericformat) | [IntegerFormat](README.md#integerformat) | [NumberFormat](README.md#numberformat) | [StringFormat](README.md#stringformat)_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:78

---

### Security

Ƭ **Security**: _[BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md) | [OAuth2AccessCodeSecurity](interfaces/oauth2accesscodesecurity.md) | [OAuth2ApplicationSecurity](interfaces/oauth2applicationsecurity.md) | [OAuth2ImplicitSecurity](interfaces/oauth2implicitsecurity.md) | [OAuth2PasswordSecurity](interfaces/oauth2passwordsecurity.md) | [ApiKeySecurity](interfaces/apikeysecurity.md)_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:248

---

### SecuritySchemeType

Ƭ **SecuritySchemeType**: _"apiKey" | "http" | "oauth2" | "openIdConnect"_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:271

---

### StringFormat

Ƭ **StringFormat**: _object_

Defined in node_modules/@types/swagger-schema-official/index.d.ts:73

#### Type declaration:

- **format**? : _"" | "byte" | "binary" | "date" | "date-time" | "password"_

- **type**: _"string"_

## Functions

### addExtension

▸ **addExtension**(`obj`: [ISpecificationExtension](interfaces/ispecificationextension.md), `extensionName`: string, `extension`: any): _void_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:3

**Parameters:**

| Name            | Type                                                             |
| --------------- | ---------------------------------------------------------------- |
| `obj`           | [ISpecificationExtension](interfaces/ispecificationextension.md) |
| `extensionName` | string                                                           |
| `extension`     | any                                                              |

**Returns:** _void_

---

### getExtension

▸ **getExtension**(`obj`: [ISpecificationExtension](interfaces/ispecificationextension.md), `extensionName`: string): _any_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:2

**Parameters:**

| Name            | Type                                                             |
| --------------- | ---------------------------------------------------------------- |
| `obj`           | [ISpecificationExtension](interfaces/ispecificationextension.md) |
| `extensionName` | string                                                           |

**Returns:** _any_

---

### getPath

▸ **getPath**(`pathsObject`: [PathsObject](interfaces/pathsobject.md), `path`: string): _[PathItemObject](interfaces/pathitemobject.md) | undefined_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:76

**Parameters:**

| Name          | Type                                     |
| ------------- | ---------------------------------------- |
| `pathsObject` | [PathsObject](interfaces/pathsobject.md) |
| `path`        | string                                   |

**Returns:** _[PathItemObject](interfaces/pathitemobject.md) | undefined_

---

### isReferenceObject

▸ **isReferenceObject**(`obj`: object): _obj is ReferenceObject_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:213

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `obj` | object |

**Returns:** _obj is ReferenceObject_

---

### isSchemaObject

▸ **isSchemaObject**(`schema`: [SchemaObject](interfaces/schemaobject.md) | [ReferenceObject](interfaces/referenceobject.md)): _schema is SchemaObject_

Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:254

**Parameters:**

| Name     | Type                                                                                               |
| -------- | -------------------------------------------------------------------------------------------------- |
| `schema` | [SchemaObject](interfaces/schemaobject.md) &#124; [ReferenceObject](interfaces/referenceobject.md) |

**Returns:** _schema is SchemaObject_
