import { getIndexsForPalindrome } from './11-getIndexForPalindrome'

// tests
describe('getIndexsForPalindrome', () => {
  test('should be a function', () => {
    expect(typeof getIndexsForPalindrome).toBe('function')
  })
  test('should throw an error if the argument is not a valid string', () => {
    expect(() => getIndexsForPalindrome(1)).toThrow()
    expect(() => getIndexsForPalindrome(true)).toThrow()
    expect(() => getIndexsForPalindrome({})).toThrow()
    expect(() => getIndexsForPalindrome([])).toThrow()
    expect(() => getIndexsForPalindrome('3')).toThrow()
  })
  test('should return an empty array if the argument is now a palindrome', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([])
    expect(getIndexsForPalindrome('reconocer')).toEqual([])
    expect(getIndexsForPalindrome('rotor')).toEqual([])
    expect(getIndexsForPalindrome('e')).toEqual([])
    expect(getIndexsForPalindrome('ana')).toEqual([])
  })

  test("should return null if the word can't be a palindrome", () => {
    expect(getIndexsForPalindrome('test')).toBe(null)
    expect(getIndexsForPalindrome('caababa')).toEqual(null)
  })

  test('should return an array with the indexes of the characters that need to be swapped', () => {
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
    expect(getIndexsForPalindrome('babba')).toEqual([0, 1])
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8])
  })
})
