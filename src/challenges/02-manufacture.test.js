import manufacture from './02-manufacture'

describe('manufacture', () => {
  test('should throw an error if the first argument is not an array ', () => {
    expect(() => manufacture('test', 'test')).toThrow()
    expect(() => manufacture(1, 'test')).toThrow()
    expect(() => manufacture({}, 'test')).toThrow()
  })

  test('should throw an error if the second argument is not a string', () => {
    expect(() => manufacture(['test'], 1)).toThrow()
    expect(() => manufacture(['test'], {})).toThrow()
    expect(() => manufacture(['test'], [])).toThrow()
  })

  test('should throw an error when the first input is not an array of strings', () => {
    expect(() => manufacture([1], 'test')).toThrow()
    expect(() => manufacture([{}], 'test')).toThrow()
    expect(() => manufacture([[]], 'test')).toThrow()
    expect(() => manufacture([false], 'test')).toThrow()
  })

  test('should throw an error if the second argument is an empty string', () => {
    expect(() => manufacture(['test'], '')).toThrow()
    expect(() => manufacture(['test'], ' ')).toThrow()
  })
})
