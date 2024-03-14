import SourceCode from '@/sourceCode'
import Token from './token'

class LeftParen extends Token {
  static from (_sourceCode: SourceCode): Token {
    return new LeftParen()
  }

  static is (_sourceCode: SourceCode): boolean {
    return false
  }
}

export default LeftParen
