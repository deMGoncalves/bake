import type { BunFile } from 'bun'
import type { Character } from './character'
import checkBounds from './checkBounds'

class SourceCode {
  private cursor: number = 1
  private index: number = 0
  private line: number = 1
  private text: string

  get notDone(): boolean {
    return this.index < this.text.length
  }

  get peek(): string {
    return this.text[this.index]
  }

  constructor(text: string) {
    this.text = text
  }

  enter(): SourceCode {
    this.line += 1
    this.cursor = 1
    this.index += 1
    return this
  }

  jump(n: number = 0): SourceCode {
    this.cursor += n
    this.index += n
    return this
  }

  lookAhead(n: number = 0): string {
    return this.text.slice(this.index, (this.index + n))
  }

  next(): SourceCode {
    this.cursor += 1
    this.index += 1
    return this
  }

  @checkBounds
  shift(): Character {
    const character: Character = {
      cursor: this.cursor,
      line: this.line,
      value: this.peek
    }

    this.next()

    return character
  }

  @checkBounds
  take(n: number = 0): Character {
    const character: Character = {
      cursor: this.cursor,
      line: this.line,
      value: this.lookAhead(n)
    }

    this.jump(n)

    return character
  }

  static async from(path: string): Promise<SourceCode> {
    const file: BunFile = Bun.file(path)
    const text: string = await file.text()
    return new SourceCode(text)
  }
}

export default SourceCode
