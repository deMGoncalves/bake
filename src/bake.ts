import type { BunFile } from "bun"
import Scanner from './scanner'

class Bake {
  static async run (path: string): Promise<void> {
    const file: BunFile = Bun.file(path)
    const source: string = await file.text()
    const tokens: any[] = Scanner.run(source)
    console.log(tokens)
  }
}

export default Bake
