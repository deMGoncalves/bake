import SourceCode from 'sourceCode'
import Token from './token'

class Dot extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Dot(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /\./.test(sourceCode.current.value)
  }
}

export default Dot
