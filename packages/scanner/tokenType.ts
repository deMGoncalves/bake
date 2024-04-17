enum TokenType {
  // Single-character tokens
  ADDITION,
  COMMA,
  DIVISION,
  DOT,
  LEFT_BRACE,
  LEFT_PAREN,
  MULTIPLICATION,
  RIGHT_BRACE,
  RIGHT_PAREN,
  SUBTRACTION,
  SEMICOLON,

  // One or two character tokens
  ASSIGNMENT,
  EQUALITY,
  GREATER_THEN,
  GREATER_THEN_OR_EQUAL,
  INEQUALITY,
  NOT,
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
