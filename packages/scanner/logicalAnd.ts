import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class LogicalAnd extends Token {
  static from(sourceCode: SourceCode): LogicalAnd {
    return new LogicalAnd(sourceCode.take(2), TokenType.AND);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(2) === "&&";
  }
}

export default LogicalAnd;
