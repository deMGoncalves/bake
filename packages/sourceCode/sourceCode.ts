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
      done: this.done,
      line: this.line,
      value: this.value
    }
  }

  get done (): boolean {
    return (this.cursor >= this.length)
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
