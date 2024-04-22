import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class LessThen extends Token {
  static from(sourceCode: SourceCode): LessThen {
    return new LessThen(sourceCode.shift(), TokenType.LESS_THEN);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "<";
  }
}

export default LessThen;
