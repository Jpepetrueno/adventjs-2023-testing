function findNaughtyStep(original, modified) {
  if (!original || !modified) {
    throw new Error('Both arguments must be received')
  }
  if (typeof original !== 'string' || typeof modified !== 'string') {
    throw new Error('Both arguments must be strings')
  }
  if (original !== modified) {
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
      if (original[i] !== modified[i]) {
        return original.length > modified.length ? original[i] : modified[i]
      }
    }
  }
  return ''
}

export default findNaughtyStep
