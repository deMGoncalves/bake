import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Equality extends Token {
  static from (sourceCode: SourceCode): Equality {
    return new Equality(sourceCode.take(2), TokenType.EQUAL_EQUAL)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(2) === '=='
  }
}

export default Equality
