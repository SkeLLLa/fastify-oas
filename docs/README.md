**[fastify-oas](README.md)**

> Globals

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

Ƭ **BaseFormatContrainedParameter**: [BaseParameter](README.md#baseparameter) & [SchemaFormatConstraints](README.md#schemaformatconstraints)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:79_

---

### BaseParameter

Ƭ **BaseParameter**: { description?: string ; in: \"body\" \| \"query\" \| \"path\" \| \"header\" \| \"formData\" \| \"body\" ; name: string ; required?: boolean }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:46_

#### Type declaration:

| Name           | Type                                                                        |
| -------------- | --------------------------------------------------------------------------- |
| `description?` | string                                                                      |
| `in`           | \"body\" \| \"query\" \| \"path\" \| \"header\" \| \"formData\" \| \"body\" |
| `name`         | string                                                                      |
| `required?`    | boolean                                                                     |

---

### BaseSchema

Ƭ **BaseSchema**: { default?: any ; description?: string ; enum?: any[] ; exclusiveMaximum?: boolean ; exclusiveMinimum?: boolean ; format?: string ; items?: [Schema](interfaces/schema.md) \| [Schema](interfaces/schema.md)[] ; maxItems?: number ; maxLength?: number ; maxProperties?: number ; maximum?: number ; minItems?: number ; minLength?: number ; minProperties?: number ; minimum?: number ; multipleOf?: number ; pattern?: string ; title?: string ; type?: [ParameterType](README.md#parametertype) ; uniqueItems?: boolean }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:153_

#### Type declaration:

| Name                | Type                                                               |
| ------------------- | ------------------------------------------------------------------ |
| `default?`          | any                                                                |
| `description?`      | string                                                             |
| `enum?`             | any[]                                                              |
| `exclusiveMaximum?` | boolean                                                            |
| `exclusiveMinimum?` | boolean                                                            |
| `format?`           | string                                                             |
| `items?`            | [Schema](interfaces/schema.md) \| [Schema](interfaces/schema.md)[] |
| `maxItems?`         | number                                                             |
| `maxLength?`        | number                                                             |
| `maxProperties?`    | number                                                             |
| `maximum?`          | number                                                             |
| `minItems?`         | number                                                             |
| `minLength?`        | number                                                             |
| `minProperties?`    | number                                                             |
| `minimum?`          | number                                                             |
| `multipleOf?`       | number                                                             |
| `pattern?`          | string                                                             |
| `title?`            | string                                                             |
| `type?`             | [ParameterType](README.md#parametertype)                           |
| `uniqueItems?`      | boolean                                                            |

---

### BodyParameter

Ƭ **BodyParameter**: [BaseParameter](README.md#baseparameter) & { in: \"body\" ; schema?: [Schema](interfaces/schema.md) }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:53_

---

### FormDataParameter

Ƭ **FormDataParameter**: [BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & { allowEmptyValue?: boolean ; collectionFormat?: [ParameterCollectionFormat](README.md#parametercollectionformat) ; in: \"formData\" ; type: [ParameterType](README.md#parametertype) \| \"file\" }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:100_

---

### GenericFormat

Ƭ **GenericFormat**: { format?: string ; type?: [ParameterType](README.md#parametertype) }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:58_

#### Type declaration:

| Name      | Type                                     |
| --------- | ---------------------------------------- |
| `format?` | string                                   |
| `type?`   | [ParameterType](README.md#parametertype) |

---

### HeaderParameter

Ƭ **HeaderParameter**: [BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & { in: \"header\" }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:95_

---

### IntegerFormat

Ƭ **IntegerFormat**: { format?: \"int32\" \| \"int64\" ; type: \"integer\" }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:63_

#### Type declaration:

| Name      | Type                   |
| --------- | ---------------------- |
| `format?` | \"int32\" \| \"int64\" |
| `type`    | \"integer\"            |

---

### NumberFormat

Ƭ **NumberFormat**: { format?: \"float\" \| \"double\" ; type: \"number\" }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:68_

#### Type declaration:

| Name      | Type                    |
| --------- | ----------------------- |
| `format?` | \"float\" \| \"double\" |
| `type`    | \"number\"              |

---

### Parameter

Ƭ **Parameter**: [BodyParameter](README.md#bodyparameter) \| [FormDataParameter](README.md#formdataparameter) \| [QueryParameter](README.md#queryparameter) \| [PathParameter](README.md#pathparameter) \| [HeaderParameter](README.md#headerparameter)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:108_

---

### ParameterCollectionFormat

Ƭ **ParameterCollectionFormat**: \"csv\" \| \"ssv\" \| \"tsv\" \| \"pipes\" \| \"multi\"

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:80_

---

### ParameterLocation

Ƭ **ParameterLocation**: \"query\" \| \"header\" \| \"path\" \| \"cookie\"

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:110_

---

### ParameterStyle

Ƭ **ParameterStyle**: \"matrix\" \| \"label\" \| \"form\" \| \"simple\" \| \"spaceDelimited\" \| \"pipeDelimited\" \| \"deepObject\"

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:111_

---

### ParameterType

Ƭ **ParameterType**: \"string\" \| \"number\" \| \"integer\" \| \"boolean\" \| \"array\" \| \"object\" \| \"file\"

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:44_

---

### PathObject

Ƭ **PathObject**: [PathsObject](interfaces/pathsobject.md)

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:75_

---

### PathParameter

Ƭ **PathParameter**: [BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & { in: \"path\" ; required: true }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:89_

---

### QueryParameter

Ƭ **QueryParameter**: [BaseFormatContrainedParameter](README.md#baseformatcontrainedparameter) & [BaseSchema](README.md#baseschema) & { allowEmptyValue?: boolean ; collectionFormat?: [ParameterCollectionFormat](README.md#parametercollectionformat) ; in: \"query\" }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:82_

---

### SchemaFormatConstraints

Ƭ **SchemaFormatConstraints**: [GenericFormat](README.md#genericformat) \| [IntegerFormat](README.md#integerformat) \| [NumberFormat](README.md#numberformat) \| [StringFormat](README.md#stringformat)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:78_

---

### Security

Ƭ **Security**: [BasicAuthenticationSecurity](interfaces/basicauthenticationsecurity.md) \| [OAuth2AccessCodeSecurity](interfaces/oauth2accesscodesecurity.md) \| [OAuth2ApplicationSecurity](interfaces/oauth2applicationsecurity.md) \| [OAuth2ImplicitSecurity](interfaces/oauth2implicitsecurity.md) \| [OAuth2PasswordSecurity](interfaces/oauth2passwordsecurity.md) \| [ApiKeySecurity](interfaces/apikeysecurity.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:248_

---

### SecuritySchemeType

Ƭ **SecuritySchemeType**: \"apiKey\" \| \"http\" \| \"oauth2\" \| \"openIdConnect\"

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:271_

---

### StringFormat

Ƭ **StringFormat**: { format?: "" \| \"byte\" \| \"binary\" \| \"date\" \| \"date-time\" \| \"password\" ; type: \"string\" }

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:73_

#### Type declaration:

| Name      | Type                                                                      |
| --------- | ------------------------------------------------------------------------- |
| `format?` | "" \| \"byte\" \| \"binary\" \| \"date\" \| \"date-time\" \| \"password\" |
| `type`    | \"string\"                                                                |

## Functions

### addExtension

▸ **addExtension**(`obj`: [ISpecificationExtension](interfaces/ispecificationextension.md), `extensionName`: string, `extension`: any): void

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:3_

#### Parameters:

| Name            | Type                                                             |
| --------------- | ---------------------------------------------------------------- |
| `obj`           | [ISpecificationExtension](interfaces/ispecificationextension.md) |
| `extensionName` | string                                                           |
| `extension`     | any                                                              |

**Returns:** void

---

### getExtension

▸ **getExtension**(`obj`: [ISpecificationExtension](interfaces/ispecificationextension.md), `extensionName`: string): any

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:2_

#### Parameters:

| Name            | Type                                                             |
| --------------- | ---------------------------------------------------------------- |
| `obj`           | [ISpecificationExtension](interfaces/ispecificationextension.md) |
| `extensionName` | string                                                           |

**Returns:** any

---

### getPath

▸ **getPath**(`pathsObject`: [PathsObject](interfaces/pathsobject.md), `path`: string): [PathItemObject](interfaces/pathitemobject.md) \| undefined

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:76_

#### Parameters:

| Name          | Type                                     |
| ------------- | ---------------------------------------- |
| `pathsObject` | [PathsObject](interfaces/pathsobject.md) |
| `path`        | string                                   |

**Returns:** [PathItemObject](interfaces/pathitemobject.md) \| undefined

---

### isReferenceObject

▸ **isReferenceObject**(`obj`: object): obj is ReferenceObject

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:213_

#### Parameters:

| Name  | Type   |
| ----- | ------ |
| `obj` | object |

**Returns:** obj is ReferenceObject

---

### isSchemaObject

▸ **isSchemaObject**(`schema`: [SchemaObject](interfaces/schemaobject.md) \| [ReferenceObject](interfaces/referenceobject.md)): schema is SchemaObject

_Defined in node_modules/openapi3-ts/dist/model/OpenApi.d.ts:254_

#### Parameters:

| Name     | Type                                                                                           |
| -------- | ---------------------------------------------------------------------------------------------- |
| `schema` | [SchemaObject](interfaces/schemaobject.md) \| [ReferenceObject](interfaces/referenceobject.md) |

**Returns:** schema is SchemaObject
