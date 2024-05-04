import maxDistance from './06-maxDistance'

describe('maxDistance', () => {
  test('should throw an error if the input is not a string of <, >, or * ', () => {
    expect(() => maxDistance(1)).toThrow('Invalid input')
    expect(() => maxDistance(true)).toThrow('Invalid input')
    expect(() => maxDistance({})).toThrow('Invalid input')
    expect(() => maxDistance([])).toThrow('Invalid input')
  })

  test('should throw an error if the input is an empty string', () => {
    expect(() => maxDistance('')).toThrow('Invalid input')
    expect(() => maxDistance(' ')).toThrow('Invalid input')
  })

  test('should return the maximum distance between right and left moves', () => {
    expect(maxDistance('>')).toBe(1)
    expect(maxDistance('><')).toBe(0)
    expect(maxDistance('><*>')).toBe(2)
    expect(maxDistance('><**>')).toBe(3)
  })
})
