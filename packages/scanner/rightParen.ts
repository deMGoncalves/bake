import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class RightParen extends Token {
  static from (sourceCode: SourceCode): Token {
    return new RightParen(sourceCode.current, TokenType.RIGHT_PAREN)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === ')'
  }
}

export default RightParen
