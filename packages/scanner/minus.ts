import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Minus extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Minus(sourceCode.shift(), TokenType.MINUS)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '-'
  }
}

export default Minus
