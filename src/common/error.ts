export function throwError(message: string) {
  throw new Error(
    `Error in deno-require: ${message}`
  )
}
