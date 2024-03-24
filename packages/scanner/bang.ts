import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Bang extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Bang(sourceCode.shift(), TokenType.BANG)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '!'
  }
}

export default Bang
