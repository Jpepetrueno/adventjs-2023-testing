function decode(message) {
  if (typeof message !== 'string' || message.trim() === '')
    return new Error('Invalid input')

  while (message.includes('(')) {
    let left = message.lastIndexOf('(')
    let right = message.indexOf(')', left)
    let reversed = message
      .slice(left + 1, right)
      .split('')
      .reverse()
      .join('')
    message = message.slice(0, left) + reversed + message.slice(right + 1)
  }
  return message
}

export default decode
