import SourceCode from 'sourceCode'
import stub from './stub'
import Token from './token'

class WhiteSpace extends Token {
  static from (sourceCode: SourceCode): WhiteSpace {
    sourceCode.next()
    return stub
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === ' '
  }
}

export default WhiteSpace
