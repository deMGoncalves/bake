import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class For extends Token {
  static from(sourceCode: SourceCode): For {
    return new For(sourceCode.take(3), TokenType.FOR);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(3) === "for";
  }
}

export default For;
