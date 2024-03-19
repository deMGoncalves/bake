import SourceCode from 'sourceCode'
import Token from './token'

class Star extends Token {
  static from (sourceCode: SourceCode): Token {
    return new Star(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /\*/.test(sourceCode.current.value)
  }
}

export default Star
