import type { BunFile } from "bun"
import Scanner, { Token } from './scanner'
import SourceCode from "./sourceCode"

class Bake {
  static async run (path: string): Promise<void> {
    const sourceCode: SourceCode = await SourceCode.from(path)
    const tokens: Array<Token> = Scanner.run(sourceCode)
    console.log(tokens)
  }
}

export default Bake
