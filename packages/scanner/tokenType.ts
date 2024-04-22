enum TokenType {
  // Double-character tokens
  EQUALITY = 0,
  GREATER_THEN_OR_EQUAL = 1,
  INEQUALITY = 2,
  LESS_THEN_OR_EQUAL = 3,

  // Single-character tokens
  ADDITION = 4,
  ASSIGNMENT = 5,
  COMMA = 6,
  DIVISION = 7,
  DOT = 8,
  GREATER_THEN = 9,
  LEFT_BRACE = 10,
  LEFT_PAREN = 11,
  LESS_THEN = 12,
  MULTIPLICATION = 13,
  NOT = 14,
  RIGHT_BRACE = 15,
  RIGHT_PAREN = 16,
  SUBTRACTION = 17,
  SEMICOLON = 18,

  // Literals
  IDENTIFIER = 19,
  STRING = 20,
  NUMBER = 21,

  // Keywords
  AND = 22,
  CLASS = 23,
  ELSE = 24,
  FALSE = 25,
  FUNCTION = 26,
  FOR = 27,
  IF = 28,
  NIL = 29,
  OR = 30,
  PRINT = 31,
  RETURN = 32,
  SUPER = 33,
  THIS = 34,
  TRUE = 35,
  VAR = 36,
  WHILE = 37,

  EOF = 38,
}

export default TokenType;
