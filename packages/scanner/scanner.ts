import LeftParen from './leftParen'
import SourceCode from 'sourceCode'
import Token from './token'

class Scanner {
  static run (sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = []

    while (!sourceCode.done) {
      if (LeftParen.is(sourceCode)) tokens.push(LeftParen.from(sourceCode))
      sourceCode.next()
    }

    return tokens
  }
}

export default Scanner
