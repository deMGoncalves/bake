import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class GreaterThen extends Token {
  static from (sourceCode: SourceCode): GreaterThen {
    return new GreaterThen(sourceCode.shift(), TokenType.GREATER_THEN)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '>'
  }
}

export default GreaterThen
