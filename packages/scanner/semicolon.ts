import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Semicolon extends Token {
  static from (sourceCode: SourceCode): Semicolon {
    return new Semicolon(sourceCode.shift(), TokenType.SEMICOLON)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === ';'
  }
}

export default Semicolon
