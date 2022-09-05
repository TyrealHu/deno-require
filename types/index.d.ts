type SupportFetchMethods = 'POST' | 'GET' | 'PUT'

type SupportModule = 'CommonJS' | 'EsModule'

type DenoRequireReturnType<T extends Record<string, any>, N extends boolean> = N extends true ? T : Promise<T>

type DenoRequireRawConfig = Partial<DenoRequireConfig>

interface DenoRequireSyncConfig {
  // the target js file module, the default is CommonJS
  module: SupportModule
  // the request methods, the default method is GET
  methods: SupportFetchMethods
  // the headers you want to add to the request
  headers: Record<string, string>
  // if you want to add cors to the request, the default is false
  cors: boolean
  // if you want to send cookies when you use cors to the request, the default is false
  credentials: boolean
}

interface DenoRequireAsyncConfig {
  // the target js file module, the default is CommonJS
  module: SupportModule
  // the request methods, the default method is GET
  methods: SupportFetchMethods
  // the headers you want to add to the request
  headers: Record<string, string>
  // if you want to add cors to the request, the default is false
  cors: boolean
  // if you want to send cookies when you use cors to the request, the default is false
  credentials: boolean
}

type DenoRequireConfig = DenoRequireAsyncConfig | DenoRequireSyncConfig

interface DenoRequireFetchJsFileConfig {
  methods: SupportFetchMethods
  headers: Record<string, string>
  cors: boolean
  credentials: boolean
}
