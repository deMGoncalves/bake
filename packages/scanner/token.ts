import type { Character } from "sourceCode";
import type SourceCode from "sourceCode";
import type TokenType from "./tokenType";

abstract class Token {
  private character: Character;

  readonly type: TokenType;

  get cursor() {
    return this.character.cursor;
  }

  get line() {
    return this.character.line;
  }

  get value() {
    return this.character.value;
  }

  constructor(character: Character, type: TokenType) {
    this.character = character;
    this.type = type;
  }

  subscribeIn(tokens: Array<Token>): Token {
    tokens.push(this);
    return this;
  }

  static from: (sourceCode: SourceCode) => Token;

  static is: (sourceCode: SourceCode) => boolean;
}

export default Token;
