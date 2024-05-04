import findFirstRepeated from './01-findFristRepeated'

describe('findFirstRepeated', () => {
  test('should throw an error if the input is not an array', () => {
    expect(() => findFirstRepeated('not an array')).toThrow('Invalid input')
    expect(() => findFirstRepeated(1)).toThrow('Invalid input')
    expect(() => findFirstRepeated({})).toThrow('Invalid input')
    expect(() => findFirstRepeated(false)).toThrow('Invalid input')
  })

  test('should throw an error if the array is empty', () => {
    expect(() => findFirstRepeated([])).toThrow('Invalid input')
  })

  test('If the array is [2, 1, 3, 5, 3, 2] should return 3', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
  })

  test('If the array is [1, 2, 3, 4, 5, 6] should return -1', () => {
    expect(findFirstRepeated([1, 2, 3, 4, 5, 6])).toBe(-1)
  })

  test('If the array is [1, 2, 3, 4, 5, 6, 1] should return 1', () => {
    expect(findFirstRepeated([1, 2, 3, 4, 5, 6, 1])).toBe(1)
  })

  test('If the array is [5, 1, 5, 1] should return 5', () => {
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })
})
