import type SourceCode from "sourceCode";
import Addition from "./addition";
import And from "./and";
import Assignment from "./assignment";
import Class from "./class";
import Comma from "./comma";
import Division from "./division";
import Dot from "./dot";
import Equality from "./equality";
import GreaterThen from "./greaterThen";
import GreaterThenOrEqual from "./greaterThenOrEqual";
import Inequality from "./inequality";
import LeftBrace from "./leftBrace";
import LeftParen from "./leftParen";
import LessThen from "./lessThen";
import LessThenOrEqual from "./lessThenOrEqual";
import Multiplication from "./multiplication";
import NewLine from "./newLine";
import Not from "./not";
import RightBrace from "./rightBrace";
import RightParen from "./rightParen";
import Semicolon from "./semicolon";
import Subtraction from "./subtraction";
import Tab from "./tab";
import type Token from "./token";
import WhiteSpace from "./whiteSpace";

class Scanner {
  static run(sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Token> = [];

    while (sourceCode.notDone) {
      [
        // Keywords
        And,
        Class,

        // Double-character tokens
        Equality,
        GreaterThenOrEqual,
        Inequality,
        LessThenOrEqual,

        // Single-character tokens
        Addition,
        Assignment,
        Comma,
        Division,
        Dot,
        GreaterThen,
        LeftBrace,
        LeftParen,
        LessThen,
        Multiplication,
        Not,
        RightBrace,
        RightParen,
        Subtraction,
        Semicolon,

        // Ignored characters
        NewLine,
        Tab,
        WhiteSpace,
      ]
        .find((token) => token.is(sourceCode))
        ?.from(sourceCode)
        ?.subscribeIn(tokens);
    }

    return tokens;
  }
}

export default Scanner;
