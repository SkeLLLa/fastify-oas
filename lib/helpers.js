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

exports.genHeaders = (dst, src) => {
  const headers = src;
  if (headers.type && headers.properties) {
    // for the shorthand querystring declaration
    const headerProperties = Object.keys(headers.properties).reduce(
      (acc, h) => {
        const required =
          (headers.required && headers.required.indexOf(h) >= 0) || false;
        const newProps = Object.assign({}, headers.properties[h], {required});
        return Object.assign({}, acc, {[h]: newProps});
      },
      {}
    );

    return exports.genHeaders(dst, headerProperties);
  }

  Object.keys(headers).forEach((h) => {
    const val = Object.assign({}, headers[h]);
    const header = {
      name: h,
      in: 'header',
      required: val.required,
      description: val.description,
    };
    delete val.required;
    header.schema = allowedProps(val);
    dst.push(header);
  });
};

exports.genQuery = (dst, src) => {
  const query = src;
  if (query.type && query.properties) {
    // for the shorthand querystring declaration
    const queryParams = Object.keys(query.properties).reduce((acc, h) => {
      const required =
        (query.required && query.required.indexOf(h) >= 0) || false;
      const newProps = Object.assign({}, query.properties[h], {required});
      return Object.assign({}, acc, {[h]: newProps});
    }, {});
    return exports.genQuery(dst, queryParams);
  }
  Object.keys(query).forEach((prop) => {
    const val = query[prop];
    const param = {
      name: prop,
      in: 'query',
    };
    if (val.required) param.required = val.required;
    if (val.description) param.description = val.description;
    delete val.required;
    param.schema = allowedProps(val);
    dst.push(param);
  });
};

exports.genPath = (dst, src) => {
  const params = src;
  if (params.type && params.properties) {
    // for the shorthand querystring declaration
    return exports.genPath(dst, params.properties);
  }

  Object.keys(params).forEach((p) => {
    const val = params[p];
    const param = {
      name: p,
      in: 'path',
      required: true,
      description: val.description,
    };
    delete val.required;
    param.schema = allowedProps(val);
    dst.push(param);
  });
};

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
