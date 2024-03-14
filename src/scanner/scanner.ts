import LeftParen from './leftParen'
import SourceCode from '@/sourceCode'
import Token from './token'

class Scanner {
  static run (sourceCode: SourceCode): Array<Token> {
    const tokens: Array<Tokens> = []

    while (sourceCode.atEnd) {
      if (LeftParen.is(sourceCode)) tokens.push(LeftParen.from(sourceCode))
    }

    return tokens
  }
}

export default Scanner
