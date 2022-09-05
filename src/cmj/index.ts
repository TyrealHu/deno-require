export function denoCmsRequire<T extends Record<string, any>, N extends boolean>(
  _url: string,
  _config: DenoRequireConfig,
  _sync?: N
): DenoRequireReturnType<T, N> {
  if (_sync) {
    // @ts-ignore
    const res: DenoRequireReturnType<T, N> = {}
    return res
  } else {
    // @ts-ignore
    const res: DenoRequireReturnType<T, N> = new Promise<T>((resolve) => resolve())
    return res
  }
}
