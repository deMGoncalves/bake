import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Star extends Token {
  static from (sourceCode: SourceCode): Star {
    return new Star(sourceCode.shift(), TokenType.STAR)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '*'
  }
}

export default Star
