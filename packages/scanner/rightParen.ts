import SourceCode from 'sourceCode'
import Token from './token'

class RightParen extends Token {
  static from (sourceCode: SourceCode): Token {
    return new RightParen(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /\)/.test(sourceCode.current.value)
  }
}

export default RightParen
