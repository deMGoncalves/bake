import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Else extends Token {
  static from(sourceCode: SourceCode): Else {
    return new Else(sourceCode.take(4), TokenType.ELSE);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(4) === "else";
  }
}

export default Else;
