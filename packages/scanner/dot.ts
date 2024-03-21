import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Dot extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Dot(sourceCode.current, TokenType.DOT)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '.'
  }
}

export default Dot
