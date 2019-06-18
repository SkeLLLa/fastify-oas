[fastify-oas](../README.md) > [BaseOAuthSecurity](../interfaces/baseoauthsecurity.md)

# Interface: BaseOAuthSecurity

## Hierarchy

 [BaseSecurity](basesecurity.md)

**↳ BaseOAuthSecurity**

↳  [OAuth2ImplicitSecurity](oauth2implicitsecurity.md)

↳  [OAuth2PasswordSecurity](oauth2passwordsecurity.md)

↳  [OAuth2ApplicationSecurity](oauth2applicationsecurity.md)

↳  [OAuth2AccessCodeSecurity](oauth2accesscodesecurity.md)

## Index

### Properties

* [description](baseoauthsecurity.md#description)
* [flow](baseoauthsecurity.md#flow)
* [scopes](baseoauthsecurity.md#scopes)
* [type](baseoauthsecurity.md#type)

---

## Properties

<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Inherited from [BaseSecurity](basesecurity.md).[description](basesecurity.md#description)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:179*

___
<a id="flow"></a>

###  flow

**● flow**: *"accessCode" \| "application" \| "implicit" \| "password"*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:194*

___
<a id="scopes"></a>

### `<Optional>` scopes

**● scopes**: *[OAuthScope](oauthscope.md)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:195*

___
<a id="type"></a>

###  type

**● type**: *"oauth2"*

*Overrides [BaseSecurity](basesecurity.md).[type](basesecurity.md#type)*

*Defined in node_modules/@types/swagger-schema-official/index.d.ts:193*

___

