import type SourceCode from "sourceCode";
import stub from "./stub";
import Token from "./token";

class NewLine extends Token {
  static from(sourceCode: SourceCode): NewLine {
    sourceCode.enter();
    return stub;
  }

  static is(sourceCode: SourceCode): boolean {
    return sourceCode.peek === "\n";
  }
}

export default NewLine;
