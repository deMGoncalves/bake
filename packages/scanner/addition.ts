import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Addition extends Token {
  static from(sourceCode: SourceCode): Addition {
    return new Addition(sourceCode.shift(), TokenType.ADDITION)
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === '+'
  }
}

export default Addition
