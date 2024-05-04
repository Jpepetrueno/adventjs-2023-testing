import decode from './04-decode'

describe('decode', () => {
  test('should throw an error if the argument is not a string', () => {
    expect(() => decode(1)).toThrow('Invalid input')
    expect(() => decode(true)).toThrow('Invalid input')
    expect(() => decode({})).toThrow('Invalid input')
    expect(() => decode([])).toThrow('Invalid input')
  })

  test('should throw an error if the argument is an empty string', () => {
    expect(() => decode('')).toThrow('Invalid input')
    expect(() => decode(' ')).toThrow('Invalid input')
  })

  test('should decode a string', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
  })
})
