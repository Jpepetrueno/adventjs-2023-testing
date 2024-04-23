export function checkIsValidCopy(original, copy) {
  // Check if both arguments are provided
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

  // Check if both arguments are strings
  if (typeof original !== 'string' || typeof copy !== 'string') {
    throw new Error('both arguments must be strings')
  }

  // Check if both arguments have the same length
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
