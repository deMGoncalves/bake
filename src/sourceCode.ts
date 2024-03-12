import type { BunFile } from "bun"

class SourceCode {
  private text: string

  constructor (text: string) {
    this.text = text
  }

  static async from (path: string): Promise<SourceCode> {
    const file: BunFile = Bun.file(path)
    const text: string = await file.text()
    return new SourceCode(text)
  }
}

export default SourceCode
