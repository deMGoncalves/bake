// linha e cursor deve ser uma classe e delegar para elas 
// as reponsabilidades de contagem
import type { BunFile } from 'bun'
import type { Character } from './character'
import errorHandling from './errorHandling'
import NewLine from './newLine'

class SourceCode {
  private cursor: number = 1
  private index: number = 0
  private line: number = 1
  private length: number
  private text: string

  get notDone (): boolean {
    return (this.index < this.length)
  }

  get peek(): Character {
    return this.text[this.index]
  }

  constructor (text: string) {
    this.text = text
    this.length = text.length
  }

  @errorHandling
  lineFeed (): SourceCode {
    this.line += 1
    this.cursor = 1
    this.index += 1
    return this
  }

  lookAhead (end: number = 1): string {
    return this.text.slice(this.index, end)
  }

  @errorHandling
  next (): SourceCode {
    this.cursor += 1
    this.index += 1
    return this
  }

  @errorHandling
  shift (): Character {
    return {
      cursor: this.cursor++,
      line: this.line,
      value: this.text[this.index++]
    }
  }

  take (_end: number = 1): Character {
    return {
      cursor: -1,
      line: -1,
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
