import SourceCode from 'sourceCode'
import Token from './token'
import TokenType from './tokenType'

class Star extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Star(sourceCode.current, TokenType.STAR)
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.current.value === '*'
  }
}

export default Star
