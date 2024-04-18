import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Comma extends Token {
  static from(sourceCode: SourceCode): Comma {
    return new Comma(sourceCode.shift(), TokenType.COMMA);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === ",";
  }
}

export default Comma;
