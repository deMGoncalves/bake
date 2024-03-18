import LeftBrace from './leftBrace'
import LeftParen from './leftParen'
import RightParen from './rightParen'
import SourceCode from 'sourceCode'
import Token from './token'

class Scanner {
  static run (sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = []

    while (!sourceCode.done) {
      [
        LeftParen,
        RightParen,
        LeftBrace
      ]
        .find((token) => token.is(sourceCode))
        ?.from(sourceCode)
        ?.subscribe(tokens)

      sourceCode.next()
    }

    return tokens
  }
}

export default Scanner
