import { organizeGifts } from './08-organizeGifts'
// Test Cases
describe('organizeGifts', () => {
  test('should throw an error if the argument is not a string with regex pattern /^\\d+[a-z]/ and contain only letters a-z and numbers 0-9, and a letter must always be preceded by at least one number different to 0 ', () => {
    const gifts = 'fjd343!!xks'
    expect(() => organizeGifts(gifts)).toThrow()
    const gifts2 = '76a-fab'
    expect(() => organizeGifts(gifts2)).toThrow()
    const gifts3 = '76a11bc'
    expect(() => organizeGifts(gifts3)).toThrow()
    const gifts4 = 'a'
    expect(() => organizeGifts(gifts4)).toThrow()
    const gifts5 = '0x'
    expect(() => organizeGifts(gifts5)).toThrow()
    const gifts6 = ''
    expect(() => organizeGifts(gifts6)).toThrow()
  })
  test('should organize gifts correctly', () => {
    const result = organizeGifts('76a11b')
    expect(result).toBe('[a]{a}{a}(aaaaaa){b}(b)')
    const result2 = organizeGifts('76a')
    expect(result2).toBe('[a]{a}{a}(aaaaaa)')
    const result3 = organizeGifts('70b120a4c')
    expect(result3).toBe('[b]{b}{b}[a][a]{a}{a}(cccc)')
    const result4 = organizeGifts('20a')
    expect(result4).toBe('{a}{a}')
    const result5 = organizeGifts('8c12c30c')
    expect(result5).toBe('[c]')
    const result6 = organizeGifts('1a9a')
    expect(result6).toBe('{a}')
    const result7 = organizeGifts('13a8b3a')
    expect(result7).toBe('{a}(aaaaaa)(bbbbbbbb)')
  })
})
