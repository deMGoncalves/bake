import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class RightParen extends Token {
  static from (sourceCode: SourceCode): Token {
    return new RightParen(sourceCode.shift(), TokenType.RIGHT_PAREN)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === ')'
  }
}

export default RightParen
