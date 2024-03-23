import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class BangEqual extends Token {
  static from (sourceCode: SourceCode): Token {
    return new BangEqual(sourceCode.current, TokenType.BANG)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead() === '!='
  }
}

export default BangEqual
