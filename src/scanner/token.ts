import SourceCode from "@/sourceCode";

abstract class Token {
  abstract static is (sourceCode: SourceCode): boolean
}

export default Token
