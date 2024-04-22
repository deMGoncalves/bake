import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class And extends Token {
  static from(sourceCode: SourceCode): And {
    return new And(sourceCode.take(2), TokenType.AND);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(2) === "&&";
  }
}

export default And;
