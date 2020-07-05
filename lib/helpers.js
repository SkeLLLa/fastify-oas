const ALLOWED_SCHEMA_KEYS = [
  '$ref',
  'additionalProperties',
  'allOf',
  'anyOf',
  'default',
  'description',
  'enum',
  'example',
  'examples',
  'exclusiveMaximum',
  'exclusiveMinimum',
  'format',
  'items',
  'maximum',
  'maxItems',
  'maxLength',
  'maxProperties',
  'minimum',
  'minItems',
  'minLength',
  'minProperties',
  'multipleOf',
  'not',
  'nullable',
  'oneOf',
  'pattern',
  'properties',
  'required',
  'title',
  'type',
  'uniqueItems',
];

const allowedProps = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  return Object.keys(obj).reduce((newObj, key) => {
    const val = obj[key];
    if (Array.isArray(val)) {
      if (obj.type === 'array' && key === 'items') {
        // Fix json-schema tuples, as they're not supported in OpenAPI 3: https://github.com/OAI/OpenAPI-Specification/issues/1026
        newObj.items = {oneOf: obj.items.map(allowedProps)};
        newObj.minItems =
          obj.minItems === undefined ? obj.items.length : obj.minItems;
        newObj.maxItems =
          obj.maxItems === undefined ? obj.items.length : obj.maxItems;
      } else {
        if (
          !obj.type &&
          key === 'enum' &&
          obj.enum.every((v) => typeof v === typeof obj.enum[0])
        ) {
          // Attempt to fix enum schemas without a type (only possible if all values have the same type)
          newObj.type = typeof obj.enum[0];
        }
        newObj[key] = val.map(allowedProps);
      }
    } else if (
      obj.type === 'object' &&
      key === 'properties' &&
      typeof val === 'object'
    ) {
      // Process nested schemas in object properties
      newObj.properties = Object.keys(obj.properties).reduce(
        (processed, prop) => {
          return Object.assign(processed, {
            [prop]: allowedProps(obj.properties[prop]),
          });
        },
        {},
      );
    } else if (ALLOWED_SCHEMA_KEYS.includes(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
};

exports.genBody = (dst, src, consumes) => {
  convertSchemaTypes(src);
  const body = src;
  const mediaTypes = consumes;
  dst.content = {};
  if (body.description) {
    dst.description = body.description;
    delete body.description;
  }

  if (body.required) {
    dst.required = true;
  }

  for (const mediaType of mediaTypes) {
    dst.content[mediaType] = {};
    if (body.examples) {
      dst.content[mediaType].examples = body.examples
        .reduce((res, {name, ...rest}) => {
          res[name] = rest;
          return res;
        }, {});
      delete body.examples;
    } else if (body.example) {
      dst.content[mediaType].example = body.example;
      delete body.example;
    }
    dst.content[mediaType].schema = allowedProps(body);
  }
};

const gentShorthandParams = (inWhat) => {
  const genFn = (dst, src) => {
    convertSchemaTypes(src);
    const params = src;
    if ((params.type || params.oneOf) && params.properties) {
      const paramProperties = Object.keys(params.properties).reduce(
        (acc, h) => {
          const required =
            (params.required && params.required.indexOf(h) >= 0) || false;
          const newProps = Object.assign({}, params.properties[h], {
            required,
          });
          return Object.assign({}, acc, {[h]: newProps});
        },
        {},
      );
      return genFn(dst, paramProperties);
    }

    Object.keys(params).forEach((name) => {
      const val = Object.assign({}, params[name]);
      const param = {
        name: name,
        in: inWhat,
      };

      if (val.required || inWhat === 'path') param.required = true;
      if (typeof val.description !== 'undefined') {
        param.description = val.description;
      }
      if (typeof val.style === 'string') param.style = val.style;
      if (typeof val.explode === 'boolean') param.explode = val.explode;

      delete val.required;
      param.schema = allowedProps(val);
      dst.push(param);
    });
  };
  return genFn;
};

exports.genHeaders = gentShorthandParams('header');
exports.genQuery = gentShorthandParams('query');
exports.genCookies = gentShorthandParams('cookie');
exports.genPath = gentShorthandParams('path');

exports.genResponse = (dst, src, produces = ['*/*']) => {
  if (!src) {
    Object.assign(dst, {200: {description: 'Default Response'}});
    return;
  }

  Object.keys(src).forEach((key) => {
    convertSchemaTypes(src[key]);
    const description = src[key].description;
    const headers = src[key].headers;
    const links = src[key].links;
    dst[key] = {};
    if (src[key].type || src[key].oneOf || src[key].$ref) {
      const rsp = src[key];
      const mediaTypes = produces;
      for (const mediaType of mediaTypes) {
        Object.assign(dst[key], {
          content: {
            [mediaType]: {schema: allowedProps(rsp)},
          },
        });
      }
    }
    if (description) {
      Object.assign(dst[key], {description});
    }
    if (headers) {
      Object.assign(dst[key], {headers});
    }
    if (links) {
      Object.assign(dst[key], {links});
    }
  });
};

exports.formatParamUrl = (url) => {
  let start = url.indexOf('/:');
  if (start === -1) return url;

  const end = url.indexOf('/', ++start);

  if (end === -1) {
    return url.slice(0, start) + '{' + url.slice(++start) + '}';
  } else {
    return exports.formatParamUrl(
      url.slice(0, start) + '{' + url.slice(++start, end) + '}' + url.slice(end),
    );
  }
};

exports.clone = (obj) => JSON.parse(JSON.stringify(obj));

function convertSchemaTypes(schema) {
  const obj = schema;

  if (Array.isArray(obj.type)) {
    if (obj.type.includes('null')) obj.nullable = true;
    obj.type = obj.type.filter((type) => type !== 'null');

    if (obj.type.length > 1) {
      obj.oneOf = [];
      obj.type.forEach((type) => obj.oneOf.push({type}));
      delete obj.type;
    } else {
      obj.type = obj.type[0];
    }
  }

  if (obj.properties) {
    Object.values(obj.properties).forEach((prop) => convertSchemaTypes(prop));
  }
}
