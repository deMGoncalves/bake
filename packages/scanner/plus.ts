import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Plus extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Plus(sourceCode.shift(), TokenType.PLUS)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '+'
  }
}

export default Plus
