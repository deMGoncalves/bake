import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Not extends Token {
  static from(sourceCode: SourceCode): Not {
    return new Not(sourceCode.shift(), TokenType.NOT);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "!";
  }
}

export default Not;
