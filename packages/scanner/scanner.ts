import Bang from './bang'
import BangEqual from './bangEqual'
import Comma from './comma'
import Dot from './dot'
import LeftBrace from './leftBrace'
import LeftParen from './leftParen'
import Minus from './minus'
import NewLine from './newLine'
import Plus from './plus'
import RightBrace from './rightBrace'
import RightParen from './rightParen'
import Semicolon from './semicolon'
import SourceCode from 'sourceCode'
import Star from './star'
import Tab from './tab'
import Token from './token'
import WhiteSpace from './whiteSpace'

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
        BangEqual, Bang,

        // Ignored characters
        NewLine,
        Tab,
        WhiteSpace
      ]
        .find((token) => token.is(sourceCode))
        ?.from(sourceCode)
        ?.subscribeIn(tokens)
    }

    return tokens
  }
}

export default Scanner
