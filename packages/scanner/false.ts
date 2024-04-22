import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class False extends Token {
  static from(sourceCode: SourceCode): False {
    return new False(sourceCode.take(5), TokenType.FALSE);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(5) === "false";
  }
}

export default False;
