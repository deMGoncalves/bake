import Addition from './addition'
import Assignment from './assignment'
import Comma from './comma'
import Division from './division'
import Dot from './dot'
import Equality from './equality'
import GreaterThen from './greaterThen'
import GreaterThenOrEqual from './greaterThenOrEqual'
import LeftBrace from './leftBrace'
import LeftParen from './leftParen'
import Inequality from './inequality'
import Multiplication from './multiplication'
import NewLine from './newLine'
import Not from './not'
import RightBrace from './rightBrace'
import RightParen from './rightParen'
import Semicolon from './semicolon'
import Subtraction from './subtraction'
import SourceCode from 'sourceCode'
import Tab from './tab'
import Token from './token'
import WhiteSpace from './whiteSpace'

class Scanner {
  static run(sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = []

    while (sourceCode.notDone) {
      [
        // Single character tokens
        Addition,
        Comma,
        Division,
        Dot,
        LeftBrace,
        LeftParen,
        Multiplication,
        RightBrace,
        RightParen,
        Subtraction,
        Semicolon,


        // Many character tokens
        Equality, Assignment,
        Inequality, Not,
        GreaterThenOrEqual, GreaterThen,

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
