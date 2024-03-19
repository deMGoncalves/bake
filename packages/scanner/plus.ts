import SourceCode from 'sourceCode'
import Token from './token'

class Plus extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Plus(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /\+/.test(sourceCode.current.value)
  }
}

export default Plus
