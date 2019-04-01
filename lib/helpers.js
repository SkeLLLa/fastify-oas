const ALLOWED_SCHEMA_KEYS = [
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
  'oneOf',
  'pattern',
  'properties',
  'required',
  'title',
  'type',
  'uniqueItems',
];

const allowedProps = (obj) => {
  if (typeof obj !== 'object') {
    return obj;
  }
  return Object.keys(obj).reduce((newObj, key) => {
    const val = obj[key];
    if (Array.isArray(val)) {
      newObj[key] = val.map(allowedProps);
    } else if (ALLOWED_SCHEMA_KEYS.includes(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
};

exports.genBody = (dst, src, consumes) => {
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
    if (body.example) {
      dst.content[mediaType].example = body.example;
      delete body.example;
    }
    dst.content[mediaType].schema = allowedProps(body);
  }
};

const gentShorthandParams = (inWhat) => {
  const genFn = (dst, src) => {
    const params = src;
    if (params.type && params.properties) {
      const paramProperties = Object.keys(params.properties).reduce(
        (acc, h) => {
          const required =
            (params.required && params.required.indexOf(h) >= 0) || false;
          const newProps = Object.assign({}, params.properties[h], {required});
          return Object.assign({}, acc, {[h]: newProps});
        },
        {}
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
    const description = src[key].description;
    const headers = src[key].headers;
    const links = src[key].links;
    dst[key] = {};
    if (src[key].type) {
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
      url.slice(0, start) + '{' + url.slice(++start, end) + '}' + url.slice(end)
    );
  }
};

exports.clone = (obj) => JSON.parse(JSON.stringify(obj));
