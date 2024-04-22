import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class LessThenOrEqual extends Token {
  static from(sourceCode: SourceCode): LessThenOrEqual {
    return new LessThenOrEqual(
      sourceCode.take(2),
      TokenType.LESS_THEN_OR_EQUAL,
    );
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(2) === "<=";
  }
}

export default LessThenOrEqual;
