import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class RightBrace extends Token {
  static from (sourceCode: SourceCode): Token {
    return new RightBrace(sourceCode.shift(), TokenType.RIGHT_BRACE)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '}'
  }
}

export default RightBrace
