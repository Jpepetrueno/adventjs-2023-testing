/**
 * This function checks if a copy of a string is a valid degradation of the original string.
 * @param {string|number} original - The original string.
 * @param {string|number} copy - The copy string.
 * @returns {boolean} True if the copy is a valid degradation of the original, false otherwise.
 * @throws {Error} If the inputs are invalid.
 */
export function checkIsValidCopy(original, copy) {
  // Validate input: both arguments must be provided
  if (!original || !copy) {
    throw new Error('both arguments must be received')
  }

  // Convert the arguments to strings if they are numbers
  if (typeof original === 'number') {
    original = original.toString()
  }
  if (typeof copy === 'number') {
    copy = copy.toString()
  }

  // Validate input: both arguments must be strings
  if (typeof original !== 'string' || typeof copy !== 'string') {
    throw new Error('both arguments must be strings')
  }

  // If the original and copy strings have different lengths, the copy is not a valid degradation
  if (original.length !== copy.length) {
    return false
  }

  // Define the order of character degradation
  const degradationOrder = [
    'abcdefghijklmnopqrstuvwxyz',
    '#',
    '+',
    ':',
    '.',
    ' '
  ]

  // Iterate over each character in the original string
  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i]
    const copyChar = copy[i]

    // If the original character is an uppercase letter, it can only degrade to the same lowercase letter
    if (originalChar >= 'A' && originalChar <= 'Z') {
      if (
        copyChar !== originalChar.toLowerCase() &&
        copyChar !== originalChar
      ) {
        return false
      }
      continue
    }

    // If the original character and the copy character are the same, continue to the next character
    if (originalChar === copyChar) continue

    // Find the index of the original character and the copy character in the degradation order
    const originalIndex = degradationOrder.findIndex(chars =>
      chars.includes(originalChar)
    )
    const copyIndex = degradationOrder.findIndex(chars =>
      chars.includes(copyChar)
    )

    // If the copy character is less degraded than the original character, return false
    if (copyIndex <= originalIndex) {
      return false
    }
  }

  // If all characters in the copy are valid degradations of the original characters, return true
  return true
}

export default checkIsValidCopy
