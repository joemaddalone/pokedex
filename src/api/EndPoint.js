import * as pathToRegexp from 'path-to-regexp';

export default class EndPoint {
  constructor({ path, method, options = null }, baseUrl, name) {
    this.path = path;
    this.serviceOptions = options;
    this.method = method;
    this.compile = pathToRegexp.compile(this.path);
    this.baseUrl = baseUrl;
    this.name = name;
  }
  get = (options) => {
    if (!this.testMethod('GET')) {
      throw new Error(`[GET] ${this.path} is not supported`);
      return;
    }
    return this.process(options, 'GET');
  };
  // As needed add post, put, and delete.  Pokeapi only suprts GET at the moment.
  testMethod(method) {
    return this.method instanceof Array
      ? this.method.includes(method)
      : this.method === method;
  }
  generateUrl(options, method) {
    let query = '';
    const url = options
      ? `${this.baseUrl}${this.compile(options)}`
      : `${this.baseUrl}${this.path}`;

    const methodOptions = this?.serviceOptions?.[method.toLowerCase()];
    if (methodOptions?.query) {
      const q = methodOptions?.query
        .filter((key) => options[key] !== undefined) //filter out undefined query
        .map((key) => `${key}=${options[key]}`)
        .join('&');
      query = q !== '' ? `?${q}` : '';
    }
    return `${url}${query}`;
  }
  process = async (options = {}, method) => {
    const url = this.generateUrl(options, method);
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };

    const opts = {
      method,
      headers,
      ...this.serviceOptions,
    };

    let response;

    try {
      response = await fetch(url, opts);
      if (response?.status !== 200) {
        throw response;
      }
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else if (this.serviceOptions?.downloadFile) {
        return await response.blob();
      } else {
        return await response.text();
      }
    } catch (error) {
      throw response; // Response object -> https://developer.mozilla.org/en-US/docs/Web/API/Response
    }
  };
}
