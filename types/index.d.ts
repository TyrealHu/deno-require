type SupportFetchMethods = 'POST' | 'GET' | 'PUT'

interface FetchJsFileResult {
  code: string
  err?: Error
}

interface DenoRequireConfig {
  // the default method is GET
  methods?: SupportFetchMethods
  // the headers you want to add to the request
  headers?: Record<string, string>
  // if you want to add cors to the request
  cors?: boolean
  // if you want to send cookies when you use cors to the request
  credentials?: boolean
}
