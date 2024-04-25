import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class LogicalNot extends Token {
  static from(sourceCode: SourceCode): LogicalNot {
    return new LogicalNot(sourceCode.shift(), TokenType.NOT);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "!";
  }
}

export default LogicalNot;
