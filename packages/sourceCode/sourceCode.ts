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

  get notDone (): boolean {
    return (this.cursor < this.length)
  }

  get peek(): Character {
    return this.text[indexOf(this.cursor)]
  }

  constructor (text: string) {
    this.text = text
    this.length = text.length
  }

  lookAhead (end: number = 1): string {
    return this.text.slice(indexOf(this.cursor), end)
  }

  @errorHandling
  shift (): Character {
    if (NewLine.is(this.value)) {
      this.line++
    }

    return {
      cursor: this.cursor,
      line: this.line,
      value: this.text[indexOf(this.cursor++)]
    }
  }

  take (_end: number = 1): Character {
    return {
      cursor: 0
      line: 0,
      value: ''
    }
  }

  static async from (path: string): Promise<SourceCode> {
    const file: BunFile = Bun.file(path)
    const text: string = await file.text()
    return new SourceCode(text)
  }
}

export default SourceCode
