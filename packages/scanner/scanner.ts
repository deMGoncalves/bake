import LeftParen from './leftParen'
import RightParen from './rightParen'
import SourceCode from 'sourceCode'
import Token from './token'

class Scanner {
  static run (sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = []

    while (!sourceCode.done) {
      if (LeftParen.is(sourceCode)) tokens.push(LeftParen.from(sourceCode))
      if (RightParen.is(sourceCode)) tokens.push(RightParen.from(sourceCode))
      sourceCode.next()
    }

    return tokens
  }
}

export default Scanner
