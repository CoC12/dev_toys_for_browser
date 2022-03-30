const textGenerator = {
  LOWERS_LETTERS: 'abcdefghijklmnopqrstuvwxyz',
  UPPERS_LETTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  NUMBERS: '0123456789',
  SYMBOLS: '!"#$%&\'()*+,-./:;<=>?@[\\]^`{|}~',
  generate(
    length,
    quantity,
    lowercaseLetters,
    uppercaseLetters,
    numbers,
    symbols
  ) {
    let baseStr = ''
    if (lowercaseLetters) {
      baseStr += this.LOWERS_LETTERS
    }
    if (uppercaseLetters) {
      baseStr += this.UPPERS_LETTERS
    }
    if (numbers) {
      baseStr += this.NUMBERS
    }
    if (symbols) {
      baseStr += this.SYMBOLS
    }
    if (baseStr === '') {
      return baseStr
    }

    const repeatCount = (baseStr.length + length - 1) / baseStr.length
    const text = baseStr.repeat(repeatCount).substring(0, length)
    return Array(quantity).fill(text).join('\n')
  },
}
export default textGenerator
