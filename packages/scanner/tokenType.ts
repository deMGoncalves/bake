enum TokenType {
  // Single-character tokens
  LEFT_PAREN, RIGHT_PAREN,
  LEFT_BRACE, RIGHT_BRACE,
  ADDITION,
  COMMA,
  DIVISION,
  DOT,
  MULTIPLICATION,
  SUBTRACTION,
  SEMICOLON,

  // One or two character tokens
  ASSIGNMENT,
  EQUALITY,
  INEQUALITY,
  NOT,
  GREATER, GREATER_EQUAL,
  LESS, LESS_EQUAL,

  // Literals
  IDENTIFIER,
  STRING,
  NUMBER,

  // Keywords
  AND,
  CLASS,
  ELSE,
  FALSE,
  FUN,
  FOR,
  IF,
  NIL,
  OR,
  PRINT,
  RETURN,
  SUPER,
  THIS,
  TRUE,
  VAR,
  WHILE,

  EOF
}

export default TokenType
