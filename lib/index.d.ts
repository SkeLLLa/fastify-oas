import * as http from 'http';
import * as fastify from 'fastify'
import {OpenAPIObject} from 'openapi3-ts';

declare namespace fastifyOAS {
  /**
   * Fastify OAS plugin options
   */
  export interface FastifyOASOptions
    extends fastify.RegisterOptions<
        http.Server,
        http.IncomingMessage,
        http.ServerResponse
      > {
    /**
     * Documentation endpoint
     * @default /documentation
     */
    routePrefix: String;
    /**
     * If `true` the plugin will expose the documentation routes
     * @default false
     */
    exposeRoute: Boolean;
    /**
     * If `true` adds fastify schemas as openapi models
     * @default false
     */
    addModels: Boolean;
    /**
     * Openapi version
     * @default 3.0.0
     */
    openapi: String;
    /**
     * If `true` returns yaml instead of json
     * @default false
     */
    yaml: Boolean;
    /**
     * OpenApi/Swagger object except paths
     */
    swagger: OpenAPIObject;
  }
}

declare function fastifyOAS(fastify: fastify.FastifyInstance, opts: fastifyOAS.FastifyOASOptions): void;

export = fastifyOAS;
