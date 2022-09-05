import { throwError } from './error'

export async function fetchJsFileAsync(url: string, config: DenoRequireFetchJsFileConfig): Promise<string> {
  let code = ''

  try {
    const resp = await fetch(url, {
      method: config.methods,
      headers: config.headers,
      credentials: config.credentials ? 'include' : undefined,
      mode: config.cors ? 'cors' : 'no-cors'
    })

    code = await resp.text()
  } catch (e) {
    throwError(e.toString())
  }

  return code
}

export function fetchJsFileSync(url: string, config: DenoRequireFetchJsFileConfig): string {
  if (!XMLHttpRequest) {
    throwError(`You cannot use fetchJsFileSync, Because XMLHttpRequest is undefined.`)
  }
  let code = ''

  const request = new XMLHttpRequest()
  request.withCredentials = config.credentials
  for (const key of Object.keys(config.headers)) {
    request.setRequestHeader(key, config.headers[key])
  }
  request.open(config.methods, url, false)
  request.send()
  code = request.responseText

  return code
}
