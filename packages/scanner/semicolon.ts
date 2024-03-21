import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Semicolon extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Semicolon(sourceCode.current, TokenType.SEMICOLON)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === ';'
  }
}

export default Semicolon
