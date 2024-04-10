import Addition from './addition'
import Assignment from './assignment'
import Comma from './comma'
import Dot from './dot'
import Equality from './equality'
import LeftBrace from './leftBrace'
import LeftParen from './leftParen'
import Inequality from './inequality'
import NewLine from './newLine'
import Not from './not'
import RightBrace from './rightBrace'
import RightParen from './rightParen'
import Semicolon from './semicolon'
import Subtraction from './subtraction'
import SourceCode from 'sourceCode'
import Star from './star'
import Tab from './tab'
import Token from './token'
import WhiteSpace from './whiteSpace'

class Scanner {
  static run(sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = []

    while (sourceCode.notDone) {
      [
        // Single-character tokens
        LeftBrace,
        LeftParen,
        RightBrace,
        RightParen,
        Addition,
        Comma,
        Dot,
        Subtraction,
        Semicolon,
        // Slash,
        Star,


        // One or two character tokens
        Inequality, Not,
        Equality, Assignment,

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
