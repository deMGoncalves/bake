import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class RightBrace extends Token {
  static from (sourceCode: SourceCode): Token {
    return new RightBrace(sourceCode.current, TokenType.RIGHT_BRACE)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '}'
  }
}

export default RightBrace
