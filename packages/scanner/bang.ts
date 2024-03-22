import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Bang extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Bang(sourceCode.current, TokenType.BANG)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '!'
  }
}

export default Bang
