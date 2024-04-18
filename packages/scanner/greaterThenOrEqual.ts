import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class GreaterThenOrEqual extends Token {
  static from(sourceCode: SourceCode): GreaterThenOrEqual {
    return new GreaterThenOrEqual(
      sourceCode.take(2),
      TokenType.GREATER_THEN_OR_EQUAL,
    );
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(2) === ">=";
  }
}

export default GreaterThenOrEqual;
