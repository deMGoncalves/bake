import type SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Comma extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Comma(sourceCode.current, TokenType.COMMA)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === ','
  }
}

export default Comma
