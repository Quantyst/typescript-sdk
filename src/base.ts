import { BaseParams, BuildUrlParams } from './types';

export abstract class BaseService {

  constructor(private params: BaseParams) {
  }

  protected async fetchJson<T>(
    input: string,
    opts?: { method?: 'POST' | 'PATCH' | 'DELETE'; body?: Object }
  ): Promise<T> {
    const options: RequestInit | undefined = {
      method: (opts && opts.method) || 'GET',
      headers: {
        Authorization: 'Bearer ' + this.params.apiKey,
        'Content-Type': 'application/json',
      },
    };

    if (
      opts?.body &&
      opts?.method &&
      (opts.method === 'POST' || opts.method === 'PATCH')
    ) {
      options.body = JSON.stringify(opts.body);
    }

    const url = this.params.baseUrl + input;
    const response = await fetch(url, options);

    if (response.status >= 400) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  protected buildUrl(pathPattern: string, params: BuildUrlParams): string {
    const paramRE = /\{([a-zA-Z0-9_]+?)\}/g;

    return pathPattern.replace(paramRE, function (_, placeholder) {
      if (!Object.prototype.hasOwnProperty.call(params, placeholder)) {
        throw new Error(`Parameter '${placeholder}' is required`);
      }

      const value = params[placeholder];
      if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error(
          `Parameter '${placeholder}' must be a string or number`
        );
      }

      return `${value}`;
    });
  }
}
