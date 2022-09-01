import { fetchJsFileAsync } from '../common'

function denoEmsRequire(
  _url: string,
  _config: DenoRequireConfig
) {
  fetchJsFileAsync('')
}

export {
  denoEmsRequire
}
