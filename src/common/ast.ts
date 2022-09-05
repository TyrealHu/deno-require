import { parse } from 'acorn'
import type { Node } from 'acorn'

class AstTraverse {
  // @ts-ignore
  private ast: Node

  constructor(_code: string) {
    this.ast = parse(_code, { ecmaVersion: 'latest', sourceType: 'module' })
  }
}

export default AstTraverse
