import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Subtraction extends Token {
  static from(sourceCode: SourceCode): Subtraction {
    return new Subtraction(sourceCode.shift(), TokenType.SUBTRACTION);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "-";
  }
}

export default Subtraction;
