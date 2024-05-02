import maxGifts from './14-maxGitfts'

describe('maxGifts', () => {
  test('should throw an error if the input is not an array', () => {
    expect(() => maxGifts('not an array')).toThrow('Invalid input')
  })

  test('should throw an error if the array contains non-integer elements', () => {
    expect(() => maxGifts([1, 2, 'three', 4])).toThrow('Invalid input')
  })

  test('should throw an error if the array contains negative numbers', () => {
    expect(() => maxGifts([1, 2, -3, 4])).toThrow('Invalid input')
  })

  test('should return the maximum sum of non-contiguous elements', () => {
    expect(maxGifts([0, 1, 4, 2, 4, 5])).toBe(9)
    expect(maxGifts([5, 1, 2, 6])).toBe(11)
    expect(maxGifts([10, 10, 10, 10])).toBe(20)
    expect(maxGifts([13])).toBe(13)
  })
})
