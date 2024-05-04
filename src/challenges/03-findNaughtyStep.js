/**
 * This function finds the first character that differs between two strings.
 * @param {string} original - The original string.
 * @param {string} modified - The modified string.
 * @returns {string} The first character that differs between the two strings, or an empty string if they are identical.
 * @throws {Error} If either argument is missing or not a string.
 */
function findNaughtyStep(original, modified) {
  // Check if both arguments are provided
  if (!original || !modified) {
    throw new Error('Both arguments must be received')
  }
  if (typeof original !== 'string' || typeof modified !== 'string') {
    throw new Error('Both arguments must be strings')
  }
  // If the strings are not identical, find the first differing character
  if (original !== modified) {
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
      // If the characters at the current index are different
      if (original[i] !== modified[i]) {
        // Return the differing character from the longer string
        return original.length > modified.length ? original[i] : modified[i]
      }
    }
  }
  // If the strings are identical, return an empty string
  return ''
}

export default findNaughtyStep
