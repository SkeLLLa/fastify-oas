# fastify-oas

<div align="center">
  <img src="https://gitlab.com/m03geek/fastify-oas/raw/master/logo.png" alt="fastify-oas logo"/>
</div>

[![NPM Version](https://img.shields.io/npm/v/fastify-oas.svg)](https://www.npmjs.com/package/fastify-oas)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-oas.svg)](https://www.npmjs.com/package/fastify-oas)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-oas/badge.svg)](https://www.npmjs.com/package/fastify-oas)
[![Build Status](https://gitlab.com/m03geek/fastify-oas/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-oas/commits/master)
[![Coverage Status](https://gitlab.com/m03geek/fastify-oas/badges/master/coverage.svg)](https://gitlab.com/m03geek/fastify-oas/commits/master)
[![License](https://img.shields.io/npm/l/fasify-oas.svg)](https://gitlab.com/m03geek/fastify-oas/blob/master/LICENSE)

[OpenAPI 3.0+ (OAS3)](https://swagger.io/docs/specification/about/) documentation generator for Fastify.
It uses the schemas you declare in your routes to generate a swagger compliant doc.

This plugin based on [fastify-swagger](https://github.com/fastify/fastify-swagger/) that generates swagger 2.0 spec.

This plugin designed in such way to be compatible with it's predcessor and in most cases if you already use `fastify-swagger` you may just replace it with current plugin and it should work.
