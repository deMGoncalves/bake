import SourceCode from 'sourceCode'
import Token from './token'

class RightBrace extends Token {
  static from (sourceCode: SourceCode): Token {
    return new RightBrace(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /}/.test(sourceCode.current.value)
  }
}

export default RightBrace
