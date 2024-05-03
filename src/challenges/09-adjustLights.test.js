import { adjustLights } from './09-adjustLights'
// tests
describe('adjustLights', () => {
  test('should be a function', () => {
    expect(typeof adjustLights).toBe('function')
  })

  test('should throw an error if lights has less than two elements', () => {
    let lights = ['🔴']
    expect(() => adjustLights(lights)).toThrow()
  })

  test('should throw an error if lights is not an array of 🔴 or 🟢', () => {
    let lights = [1, 2]
    expect(() => adjustLights(lights)).toThrow(
      'Each element in lights array must be 🔴 or 🟢'
    )
  })

  test('should return of the number of changes between newLights and lights', () => {
    let lights = ['🔴', '🔴']
    expect(adjustLights(lights)).toBe(1)

    let lights2 = ['🔴', '🔴', '🟢', '🔴', '🟢']
    expect(adjustLights(lights2)).toBe(1)

    let lights3 = ['🟢', '🔴', '🟢', '🟢', '🟢']
    expect(adjustLights(lights3)).toBe(1)

    let lights4 = ['🟢', '🟢', '🟢']
    expect(adjustLights(lights4)).toBe(1)
  })
})
