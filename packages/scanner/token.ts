import type { Character } from 'sourceCode'
import SourceCode from 'sourceCode'

abstract class Token {
  private character: Character

  get cursor () {
    return this.character.cursor
  }

  get line () {
    return this.character.line
  }

  get value () {
    return this.character.value
  }

  constructor (character: Character) {
    this.character = character
  }

  abstract static from (sourceCode: SourceCode): Token
  abstract static is (sourceCode: SourceCode): boolean
}

export default Token
