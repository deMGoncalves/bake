import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class LeftBrace extends Token {
  static from (sourceCode: SourceCode): Token {
    return new LeftBrace(sourceCode.shift(), TokenType.LEFT_BRACE)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '{'
  }
}

export default LeftBrace
