import type { BunFile } from 'bun'
import type { Character } from './character'
import errorHandling from './errorHandling'
import NewLine from './newLine'

class SourceCode {
  private cursor: number = 1
  private line: number = 1
  private length: number
  private text: string

  get current (): Character {
    return {
      cursor: this.cursor,
      line: this.line,
      value: this.value
    }
  }

  get notDone (): boolean {
    return (this.cursor < this.length)
  }

  private get value (): string {
    return this.text[(this.cursor - 1)]
  }

  constructor (text: string) {
    this.text = text
    this.length = text.length
  }

  lookahead (end: number = 1): string {
    return this.text.slice(this.cursor - 1, end)
  }

  @errorHandling
  next (): SourceCode {
    if (NewLine.is(this.value)) {
      this.line++
    }

    this.cursor++
    return this
  }

  static async from (path: string): Promise<SourceCode> {
    const file: BunFile = Bun.file(path)
    const text: string = await file.text()
    return new SourceCode(text)
  }
}

export default SourceCode
