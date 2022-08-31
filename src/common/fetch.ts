export async function fetchJsFileAsync(url: string): Promise<FetchJsFileResult> {
  let code = ''
  let error: undefined | Error

  try {
    const resp = await fetch(url, {

    })

    code = await resp.text()
  } catch (e) {
    error = e
  }

  return {
    code,
    err: error
  }
}

export function fetchJsFileSync(url: string): string {
  if (!XMLHttpRequest) {
    throw new Error(
      `You cannot use fetchJsFileSync, Because XMLHttpRequest is undefined.`
    )
  }
  let code = ''

  const request = new XMLHttpRequest()

  request.open('GET', url, false)
  request.send()
  code = request.responseText

  return code
}
