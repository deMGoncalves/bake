import Bang from './bang'
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
        // Single-character tokens
        LeftParen, RightParen,
        LeftBrace, RightBrace,
        Comma,
        Dot,
        Minus,
        Plus,
        Semicolon,
        // Slash,
        Star,


        // One or two character tokens
        Bang
      ]
        .find((token) => token.is(sourceCode))
        ?.from(sourceCode)
        ?.subscribeIn(tokens)
    }

    return tokens
  }
}

export default Scanner
