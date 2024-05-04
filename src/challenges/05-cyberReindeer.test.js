import cyberReindeer from './05-cyberReindeer'

describe('cyberReindeer', () => {
  test('should throw an error if the first argument is not a string and the second argument is not a number', () => {
    expect(() => cyberReindeer(1, 1)).toThrow()
    expect(() => cyberReindeer(1, 'test')).toThrow()
    expect(() => cyberReindeer(1, {})).toThrow()
    expect(() => cyberReindeer(1, [])).toThrow()
    expect(() => cyberReindeer(1, false)).toThrow()
  })

  test('should throw an error if the second argument is not an integer greater than 1', () => {
    expect(() => cyberReindeer('test', 0)).toThrow()
    expect(() => cyberReindeer('test', 1.5)).toThrow()
    expect(() => cyberReindeer('test', -1)).toThrow()
  })

  test('should throw an error if the first argument is not an string of ., |, and one S', () => {
    expect(() => cyberReindeer('test', 1)).toThrow()
    expect(() => cyberReindeer('..S...|S.', 2)).toThrow()
  })

  test('should throw an error if the second argument is not an integer greater than 1', () => {
    expect(() => cyberReindeer('..S...|..', 0)).toThrow()
    expect(() => cyberReindeer('..S...|..', 1.5)).toThrow()
    expect(() => cyberReindeer('..S...|..', -1)).toThrow()
  })

  test('should return the correct array of strings', () => {
    expect(cyberReindeer('S..|...|..', 10)).toEqual([
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..'
    ])
    expect(cyberReindeer('S..|...|..', 1)).toEqual(['S..|...|..'])

    expect(cyberReindeer('S.|.', 4)).toEqual(['S.|.', '.S|.', '.S|.', '.S|.'])

    expect(cyberReindeer('S.|.|.', 7)).toEqual([
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.'
    ])
  })
})
