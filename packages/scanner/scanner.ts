import Comma from './comma'
import Dot from './dot'
import LeftBrace from './leftBrace'
import LeftParen from './leftParen'
import Minus from './minus'
import Plus from './plus'
import RightBrace from './rightBrace'
import RightParen from './rightParen'
import Semicolon from './semicolon'
import SourceCode from 'sourceCode'
import Star from './star'
import Token from './token'

class Scanner {
  static run (sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = []

    while (sourceCode.notDone) {
      [
        LeftParen, RightParen,
        LeftBrace, RightBrace,
        Comma,
        Dot,
        Semicolon,
        Minus,
        Plus,
        Star
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
