import findNaughtyStep from './03-findNaughtyStep'

describe('findNaughtyStep', () => {
  test('should throw an error if two arguments are not received', () => {
    expect(() => findNaughtyStep(1)).toThrow()
    expect(() => findNaughtyStep('a')).toThrow()
    expect(() => findNaughtyStep()).toThrow()
    expect(() => findNaughtyStep('', '')).toThrow()
  })

  test('should throw an error if the arguments are not strings', () => {
    expect(() => findNaughtyStep(1, 2)).toThrow()
    expect(() => findNaughtyStep('a', 2)).toThrow()
    expect(() => findNaughtyStep(1, 'b')).toThrow()
  })

  test('should return the first string if the arguments are not equal', () => {
    expect(findNaughtyStep('a', 'b')).toBe('b')
    expect(findNaughtyStep('ab', 'ac')).toBe('c')
  })

  test('should return an empty string if the arguments are equal', () => {
    expect(findNaughtyStep('a', 'a')).toBe('')
    expect(findNaughtyStep('ab', 'ab')).toBe('')
    expect(findNaughtyStep(' ', ' ')).toBe('')
  })
})
