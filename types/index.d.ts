type SupportFetchMethods = 'POST' | 'GET' | 'PUT'

type SupportModule = 'CommonJS' | 'EsModule'

type DenoRequireRawConfig = Partial<DenoRequireConfig>

interface FetchJsFileResult {
  code: string
  err?: Error
}

interface DenoRequireSyncConfig {
  // if you want to require the module sync
  sync: true
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
  // if you want to require the module sync
  sync: false
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
