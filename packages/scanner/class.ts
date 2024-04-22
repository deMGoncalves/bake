import type SourceCode from "sourceCode";
import Token from "./token";
import TokenType from "./tokenType";

class Class extends Token {
  static from(sourceCode: SourceCode): Class {
    return new Class(sourceCode.take(5), TokenType.CLASS);
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.lookAhead(5) === "class";
  }
}

export default Class;
