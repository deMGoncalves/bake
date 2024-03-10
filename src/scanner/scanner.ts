import type { BunFile } from "bun"
import Token from './token'

class Scanner {
  static run (_file: BunFile): Array<Token> {
    return []
  }
}

export default Scanner
