import { denoCmsRequire } from './cmj'
import { defaultDenoRequireConfig, jsModule } from './common/config'
import { denoEmsRequire } from './esm'

function mergeConfig(rawConfig?: DenoRequireRawConfig): DenoRequireConfig {
  return {
    ...defaultDenoRequireConfig,
    ...rawConfig
  }
}

export async function denoRequire(
  url: string,
  rawConfig?: DenoRequireRawConfig
) {
  const config = mergeConfig(rawConfig)

  if (config.module === jsModule.CommonJS) {
    return denoCmsRequire(url, config)
  } else {
    return denoEmsRequire(url, config)
  }
}
