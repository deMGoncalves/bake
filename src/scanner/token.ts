import SourceCode from "@/sourceCode";

abstract class Token {
  abstract static from (sourceCode: SourceCode): Token
  abstract static is (sourceCode: SourceCode): boolean
}

export default Token
