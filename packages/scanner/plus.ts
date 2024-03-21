import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Plus extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Plus(sourceCode.current, TokenType.PLUS)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '+'
  }
}

export default Plus
