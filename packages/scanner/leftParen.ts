import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class LeftParen extends Token {
  static from(sourceCode: SourceCode): LeftParen {
    return new LeftParen(sourceCode.shift(), TokenType.LEFT_PAREN);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "(";
  }
}

export default LeftParen;
