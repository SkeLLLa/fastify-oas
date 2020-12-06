**[fastify-oas](../README.md)**

> [Globals](../README.md) / BaseOAuthSecurity

# Interface: BaseOAuthSecurity

## Hierarchy

* [BaseSecurity](basesecurity.md)

  ↳ **BaseOAuthSecurity**

  ↳↳ [OAuth2ImplicitSecurity](oauth2implicitsecurity.md)

  ↳↳ [OAuth2PasswordSecurity](oauth2passwordsecurity.md)

  ↳↳ [OAuth2ApplicationSecurity](oauth2applicationsecurity.md)

  ↳↳ [OAuth2AccessCodeSecurity](oauth2accesscodesecurity.md)

## Index

### Properties

* [description](baseoauthsecurity.md#description)
* [flow](baseoauthsecurity.md#flow)
* [scopes](baseoauthsecurity.md#scopes)
* [type](baseoauthsecurity.md#type)

## Properties

### description

• `Optional` **description**: string

*Inherited from [BaseSecurity](basesecurity.md).[description](basesecurity.md#description)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:200*

___

### flow

•  **flow**: \"accessCode\" \| \"application\" \| \"implicit\" \| \"password\"

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:215*

___

### scopes

• `Optional` **scopes**: [OAuthScope](oauthscope.md)

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:216*

___

### type

•  **type**: \"oauth2\"

*Overrides [BaseSecurity](basesecurity.md).[type](basesecurity.md#type)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:214*
