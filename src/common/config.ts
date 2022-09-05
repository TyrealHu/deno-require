export const defaultDenoRequireConfig: DenoRequireConfig = {
  module: 'CommonJS',
  methods: 'GET',
  headers: {},
  cors: false,
  credentials: false
}

export function mergeConfig(rawConfig?: DenoRequireRawConfig): DenoRequireConfig {
  return {
    ...defaultDenoRequireConfig,
    ...rawConfig
  }
}

export enum fetchMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT'
}

export enum jsModule {
  CommonJS = 'CommonJS',
  EsModule = 'EsModule'
}
