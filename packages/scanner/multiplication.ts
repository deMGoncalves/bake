import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Multiplication extends Token {
  static from(sourceCode: SourceCode): Multiplication {
    return new Multiplication(sourceCode.shift(), TokenType.MULTIPLICATION);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "*";
  }
}

export default Multiplication;
