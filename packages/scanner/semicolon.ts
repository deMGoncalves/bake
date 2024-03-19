import SourceCode from 'sourceCode'
import Token from './token'

class Semicolon extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Semicolon(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /;/.test(sourceCode.current.value)
  }
}

export default Semicolon
