import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Inequality extends Token {
  static from (sourceCode: SourceCode): Inequality {
    return new Inequality(sourceCode.take(2), TokenType.BANG_EQUAL)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(2) === '!='
  }
}

export default Inequality
