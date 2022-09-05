import { init, parse } from 'es-module-lexer'
import { fetchJsFileAsync } from '../common'
import { throwError } from '../common/error'

export async function denoEmsRequire<T extends Record<string, any>>(
  url: string,
  config: DenoRequireConfig,
): Promise<T> {
  // @ts-ignore
  const { methods, headers, credentials, cors } = config
  const code = await fetchJsFileAsync(url, {
    methods,
    headers,
    credentials,
    cors
  })

  if (!code) {
    throwError(`The code of js file is empty`)
  }

  await init

  parse(code)

  const res = {} as T
  return res
}
