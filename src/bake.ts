import type { BunFile } from "bun"
import Scanner, { Token } from './scanner'

class Bake {
  static async run (path: string): Promise<void> {
    const file: BunFile = Bun.file(path)
    const tokens: Array<Token> = Scanner.run(file)
    console.log(tokens)
  }
}

export default Bake
