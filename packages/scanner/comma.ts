import SourceCode from 'sourceCode'
import Token from './token'

class Comma extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Comma(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /,/.test(sourceCode.current.value)
  }
}

export default Comma
