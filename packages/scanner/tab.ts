import SourceCode from 'sourceCode'
import stub from './stub'
import Token from './token'

class Tab extends Token {
  static from (sourceCode: SourceCode): Tab {
    sourceCode.next()
    return stub
  }

  static is (sourceCode: SourceCode): boolean {
    return sourceCode.peek === '\t'
  }
}

export default Tab
