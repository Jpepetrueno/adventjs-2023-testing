/**
 * This function decodes a message by reversing the characters inside each pair of parentheses.
 * @param {string} message - The message to be decoded.
 * @returns {string|Error} The decoded message, or an Error if the input is invalid.
 */
function decode(message) {
  // Validate input: it should be a non-empty string
  if (typeof message !== 'string' || message.trim() === '')
    return new Error('Invalid input')

  // While there are still parentheses in the message
  while (message.includes('(')) {
    // Find the position of the last '(' and the next ')' after it
    let left = message.lastIndexOf('(')
    let right = message.indexOf(')', left)

    // Reverse the characters inside the parentheses
    let reversed = message
      .slice(left + 1, right)
      .split('')
      .reverse()
      .join('')

    // Replace the characters inside the parentheses with the reversed characters
    message = message.slice(0, left) + reversed + message.slice(right + 1)
  }

  // Return the decoded message
  return message
}

export default decode
