export const defaultDenoRequireConfig: DenoRequireConfig = {
  sync: false,
  module: 'CommonJS',
  methods: 'GET',
  headers: {},
  cors: false,
  credentials: false
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
