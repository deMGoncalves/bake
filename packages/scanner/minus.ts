import SourceCode from 'sourceCode'
import Token from './token'

class Minus extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Minus(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /\-/.test(sourceCode.current.value)
  }
}

export default Minus
