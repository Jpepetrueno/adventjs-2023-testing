import transformTree from './15-transformTree'

describe('transformTree', () => {
  test('should throw an error if the input is not an array', () => {
    expect(() => transformTree('not an array')).toThrow('Invalid input')
    expect(() => transformTree(1)).toThrow('Invalid input')
    expect(() => transformTree({})).toThrow('Invalid input')
    expect(() => transformTree(false)).toThrow('Invalid input')
  })

  test('should throw an error if the elements of the array are not numbers', () => {
    expect(() => transformTree([1, 2, 'three', 4])).toThrow('Invalid input')
  })

  test('should return null if the array is empty', () => {
    expect(transformTree([])).toBe(null)
  })

  test('should return a tree object for a valid input array', () => {
    const tree = [
      2,
      7,
      5,
      null,
      6,
      null,
      9,
      null,
      null,
      1,
      11,
      null,
      null,
      null,
      10
    ]
    const expectedTree = {
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null
          },
          right: {
            value: 11,
            left: null,
            right: null
          }
        }
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      }
    }
    expect(transformTree(tree)).toEqual(expectedTree)
  })
})
