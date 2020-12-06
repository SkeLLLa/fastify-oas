**[fastify-oas](../README.md)**

> [Globals](../README.md) / BaseOAuthSecurity

# Interface: BaseOAuthSecurity

## Hierarchy

- [BaseSecurity](basesecurity.md)

  ↳ **BaseOAuthSecurity**

  ↳↳ [OAuth2ImplicitSecurity](oauth2implicitsecurity.md)

  ↳↳ [OAuth2PasswordSecurity](oauth2passwordsecurity.md)

  ↳↳ [OAuth2ApplicationSecurity](oauth2applicationsecurity.md)

  ↳↳ [OAuth2AccessCodeSecurity](oauth2accesscodesecurity.md)

## Index

### Properties

- [description](baseoauthsecurity.md#description)
- [flow](baseoauthsecurity.md#flow)
- [scopes](baseoauthsecurity.md#scopes)
- [type](baseoauthsecurity.md#type)

## Properties

### description

• `Optional` **description**: string

_Inherited from [BaseSecurity](basesecurity.md).[description](basesecurity.md#description)_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:200_

---

### flow

• **flow**: \"accessCode\" \| \"application\" \| \"implicit\" \| \"password\"

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:215_

---

### scopes

• `Optional` **scopes**: [OAuthScope](oauthscope.md)

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:216_

---

### type

• **type**: \"oauth2\"

_Overrides [BaseSecurity](basesecurity.md).[type](basesecurity.md#type)_

_Defined in node_modules/@types/swagger-schema-official/index.d.ts:214_
