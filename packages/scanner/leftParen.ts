import SourceCode from '@sourceCode'
import Token from './token'

class LeftParen extends Token {
  static from (_sourceCode: SourceCode): Token {
    return new LeftParen()
  }

  static is (sourceCode: SourceCode): boolean {
    return /\(/.test(sourceCode.current.value)
  }
}

export default LeftParen
