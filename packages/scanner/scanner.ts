import LeftBrace from './leftBrace'
import LeftParen from './leftParen'
import RightBrace from './rightBrace'
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
        LeftBrace,
        RightBrace
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
