import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Dot extends Token {
  static from (sourceCode: SourceCode): Dot {
    return new Dot(sourceCode.shift(), TokenType.DOT)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '.'
  }
}

export default Dot
