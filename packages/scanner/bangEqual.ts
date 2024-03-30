import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class BangEqual extends Token {
  static from (sourceCode: SourceCode): BangEqual {
    return new BangEqual(sourceCode.take(1), TokenType.BANG)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(1) === '!='
  }
}

export default BangEqual
