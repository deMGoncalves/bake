import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class ClassExpression extends Token {
  static from(sourceCode: SourceCode): ClassExpression {
    return new ClassExpression(sourceCode.take(5), TokenType.CLASS);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(5) === "class";
  }
}

export default ClassExpression;
