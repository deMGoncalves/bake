import SourceCode from 'sourceCode'
import Token from './token'

class LeftParen extends Token {
  static from (sourceCode: SourceCode): Token {
    return new LeftParen(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /\(/.test(sourceCode.current.value)
  }
}

export default LeftParen
