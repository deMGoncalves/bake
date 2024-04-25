import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class FunctionExpression extends Token {
  static from(sourceCode: SourceCode): FunctionExpression {
    return new FunctionExpression(sourceCode.take(8), TokenType.FUNCTION);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(8) === "function";
  }
}

export default FunctionExpression;
