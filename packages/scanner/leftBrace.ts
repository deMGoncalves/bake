import SourceCode from 'sourceCode'
import Token from './token'

class LeftBrace extends Token {
  static from (sourceCode: SourceCode): Token {
    return new LeftBrace(sourceCode.current)
  }

  static is (sourceCode: SourceCode): boolean {
    return /{/.test(sourceCode.current.value)
  }
}

export default LeftBrace
