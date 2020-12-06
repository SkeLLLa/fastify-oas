**[fastify-oas](../README.md)**

> [Globals](../README.md) / Spec

# Interface: Spec

## Hierarchy

* **Spec**

## Index

### Properties

* [basePath](spec.md#basepath)
* [consumes](spec.md#consumes)
* [definitions](spec.md#definitions)
* [externalDocs](spec.md#externaldocs)
* [host](spec.md#host)
* [info](spec.md#info)
* [parameters](spec.md#parameters)
* [paths](spec.md#paths)
* [produces](spec.md#produces)
* [responses](spec.md#responses)
* [schemes](spec.md#schemes)
* [security](spec.md#security)
* [securityDefinitions](spec.md#securitydefinitions)
* [swagger](spec.md#swagger)
* [tags](spec.md#tags)

## Properties

### basePath

• `Optional` **basePath**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:262*

___

### consumes

• `Optional` **consumes**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:264*

___

### definitions

• `Optional` **definitions**: { [definitionsName:string]: [Schema](schema.md);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:267*

___

### externalDocs

• `Optional` **externalDocs**: [ExternalDocs](externaldocs.md)

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:260*

___

### host

• `Optional` **host**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:261*

___

### info

•  **info**: [Info](info.md)

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:259*

___

### parameters

• `Optional` **parameters**: { [parameterName:string]: [BodyParameter](../README.md#bodyparameter) \| [QueryParameter](../README.md#queryparameter);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:268*

___

### paths

•  **paths**: { [pathName:string]: [Path](path.md);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:266*

___

### produces

• `Optional` **produces**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:265*

___

### responses

• `Optional` **responses**: { [responseName:string]: [Response](response.md);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:269*

___

### schemes

• `Optional` **schemes**: string[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:263*

___

### security

• `Optional` **security**: Array\<{ [securityDefinitionName:string]: string[];  }>

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:270*

___

### securityDefinitions

• `Optional` **securityDefinitions**: { [securityDefinitionName:string]: [Security](../README.md#security);  }

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:271*

___

### swagger

•  **swagger**: string

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:258*

___

### tags

• `Optional` **tags**: [Tag](tag.md)[]

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:272*
