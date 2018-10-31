import * as fastify from 'fastify';
import * as http from 'http';
import {
  OpenAPIObject,
  InfoObject,
  ExternalDocumentationObject,
  SchemasObject,
  SecurityRequirementObject,
  ComponentsObject,
  Server,
  TagObject,
} from 'openapi3-ts';
import {RegisterOptions} from 'fastify';
import {ExternalDocs, Info, Security, Tag} from 'swagger-schema-official';

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    /**
     * Init OpenApi plugin
     */
    oas(): Promise<void>;
  }

  interface RouteSchema {
    /**
     * Hides route from result OpenAPI document
     * @default false
     */
    hide?: Boolean;
    /**
     * Route description
     */
    description?: String;
    /**
     * Route summary
     */
    summary?: String;
    /**
     * Route tags
     */
    tags?: Array<String>;
    /**
     * Media types route consumes
     */
    consumes?: Array<String>;
    /**
     * Media types route produces
     */
    produces?: Array<String>;
    /**
     * OpenAPI security definitions
     */
    security?: Array<SecurityRequirementObject>;
  }
}

declare namespace fastifyOAS {
  export interface OpenApiSpec {
    info?: InfoObject | Info;
    externalDocs?: ExternalDocumentationObject | ExternalDocs;
    host?: String;
    basePath?: String;
    schemes?: SchemasObject | Array<String>;
    consumes?: Array<String>;
    produces?: Array<String>;
    security?:
      | Array<SecurityRequirementObject>
      | Array<{[securityDefinitionName: string]: Array<String>}>;
    servers?: Array<Server>;
    componetns?: ComponentsObject;
    securityDefinitions?: {
      [securityDefinitionName: string]: Security;
    };
    tags?: Array<TagObject> | Array<Tag>;
  }

  /**
   * Fastify OAS plugin options
   */
  export interface FastifyOASOptions
    extends RegisterOptions<
        http.Server,
        http.IncomingMessage,
        http.ServerResponse
      > {
    /**
     * Documentation endpoint
     * @default /documentation
     */
    routePrefix?: String;
    /**
     * If `true` the plugin will expose the documentation routes
     * @default false
     */
    exposeRoute?: Boolean;
    /**
     * If `true` adds fastify schemas as openapi models
     * @default false
     */
    addModels?: Boolean;
    /**
     * Openapi version
     * @default 3.0.0
     */
    openapi?: String;
    /**
     * If `true` returns yaml instead of json
     * @default false
     */
    yaml?: Boolean;
    /**
     * OpenApi/Swagger object except paths
     */
    swagger?: OpenApiSpec;
  }
}

declare function fastifyOAS(): void;

export = fastifyOAS;
