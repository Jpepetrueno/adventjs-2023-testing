import { checkIsValidCopy } from './12-checkIsValidCopy'

// tests
describe('checkIsValidCopy', () => {
  test('should throw an error if two arguments are not received', () => {
    expect(() => checkIsValidCopy(1)).toThrow()
    expect(() => checkIsValidCopy('a')).toThrow()
    expect(() => checkIsValidCopy()).toThrow()
    expect(() => checkIsValidCopy('', '')).toThrow()
  })

  test('should return true if the arguments are equal', () => {
    expect(checkIsValidCopy('a', 'a')).toBe(true)
    expect(checkIsValidCopy('ab', 'ab')).toBe(true)
    expect(checkIsValidCopy(' ', ' ')).toBe(true)
    expect(checkIsValidCopy(234, 234)).toBe(true)
  })
  test('should return false if the arguments must not be a equal string length', () => {
    expect(checkIsValidCopy('a', 'ab')).toBe(false)
  })
  test('should return true if the copy is a valid degradation of the original', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')
    ).toBe(true)
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true)
    expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toBe(true)
  })
  test('should return false if the copy is not a valid degradation of the original', () => {
    expect(
      checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')
    ).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
    expect(
      checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
    ).toBe(false)
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(false)
  })
})
