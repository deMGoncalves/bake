import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class LeftParen extends Token {
  static from (sourceCode: SourceCode): Token {
    return new LeftParen(sourceCode.current, TokenType.LEFT_PAREN)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '('
  }
}

export default LeftParen
