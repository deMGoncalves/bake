import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Minus extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Minus(sourceCode.current, TokenType.MINUS)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '-'
  }
}

export default Minus
