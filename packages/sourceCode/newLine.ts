class NewLine {
  static is (value: string): boolean {
    return /\n/.test(value)
  }
}

export default NewLine
