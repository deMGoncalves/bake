import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Division extends Token {
  static from(sourceCode: SourceCode): Division {
    return new Division(sourceCode.shift(), TokenType.DIVISION);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "/";
  }
}

export default Division;
