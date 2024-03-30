import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Assignment extends Token {
  static from (sourceCode: SourceCode): Assignment {
    return new Assignment(sourceCode.shift(), TokenType.EQUAL)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '='
  }
}

export default Assignment
