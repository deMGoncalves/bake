import type { BunFile } from 'bun'
import type { Character } from './character'
import errorHandling from './errorHandling'
import indexOf from './indexOf'
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
    return this.text[indexOf(this.cursor)]
  }

  constructor (text: string) {
    this.text = text
    this.length = text.length
  }

  lookAhead (end: number = 1): string {
    const start = indexOf(this.cursor)
    return this.text.slice(start, end)
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
