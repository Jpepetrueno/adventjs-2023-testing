import calculateTime from './13-calcutateTime'

// tests

describe('calculateTime', () => {
  test('should throw an error if not a function', () => {
    expect(typeof calculateTime).toBe('function')
  })
  test('should throw an error if the argument is not an array', () => {
    expect(() => calculateTime(1)).toThrow()
    expect(() => calculateTime('a')).toThrow()
    expect(() => calculateTime()).toThrow()
    expect(() => calculateTime('', '')).toThrow()
  })

  test('should throw an error if the argument is not an array of strings with the format hh:mm:ss', () => {
    expect(() => calculateTime(['a', 'b', 'c'])).toThrow()
  })

  test('should throw an error if any time in the array is not in the format hh:mm:ss', () => {
    expect(() => calculateTime(['00:10:00', '01:00', '03:30:00'])).toThrow()
    expect(() => calculateTime(['02:00:00', '25:00:00', '00:30:00'])).toThrow()
    expect(() => calculateTime(['00:45:00', '00:60:00', '00:00:30'])).toThrow()
    expect(() => calculateTime(['00:45:00', '00:45:00', '00:00:60'])).toThrow()
  })

  test('should return a string with the format hh:mm:ss', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe(
      '-02:20:00'
    )
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
    expect(
      calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    ).toBe('-05:29:00')

    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe('00:00:00')
  })

  test('should return a string with the format hh:mm:ss even if the input times are at the edge of valid values', () => {
    expect(calculateTime(['00:00:00', '00:00:00', '00:00:00'])).toBe(
      '-07:00:00'
    )
    expect(calculateTime(['23:59:59', '23:59:59', '23:59:59'])).toBe('64:59:57')
  })

  test('should handle a large number of deliveries', () => {
    const deliveries = new Array(1000).fill('00:01:00')
    expect(calculateTime(deliveries)).toBe('09:40:00')
  })
})
