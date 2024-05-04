/**
 * The `organizeGifts` function organizes gifts based on their type and quantity.
 *
 * @param {string} gifts - A string representing the gifts, where each gift is represented by a number followed by a letter.
 * The number represents the quantity of the gift and the letter represents the type of the gift.
 *
 * @returns {string} - A string representing the organized gifts. Each type of gift is organized into pallets, boxes, and bags.
 * Each pallet contains 50 gifts and is represented by '[x]', where 'x' is the type of the gift.
 * Each box contains 10 gifts and is represented by '{x}', where 'x' is the type of the gift.
 * Any remaining gifts are placed in a bag and is represented by '(x)', where 'x' is the type of the gift.
 *
 * @throws {Error} - Throws an error if the input is not a string or does not match the pattern '/^\d+[a-z]/'.
 *
 * @example
 *
 * organizeGifts('76a') // returns '[a]{a}{a}(aaaaaa)'
 */

export function organizeGifts(gifts) {
  if (
    !/^[1-9]\d*[a-z]/.test(gifts) ||
    /[^a-z0-9]/i.test(gifts) ||
    /[a-z]{2,}/.test(gifts)
  ) {
    throw new Error('The argument is an incorrect input.')
  }

  const regex = /(\d+)([a-z])/g
  let match
  let giftsMap = {}

  while ((match = regex.exec(gifts)) !== null) {
    const [, quantity, letter] = match
    const number = parseInt(quantity, 10)
    giftsMap[letter] = (giftsMap[letter] || 0) + number
  }

  let result = ''
  for (let [letter, number] of Object.entries(giftsMap)) {
    const pallets = Math.floor(number / 50)
    const boxes = Math.floor((number % 50) / 10)
    const looseGifts = number - (pallets * 50 + boxes * 10)

    result += pallets > 0 ? `${'[' + letter + ']'}`.repeat(pallets) : ''
    result += boxes > 0 ? `${'{' + letter + '}'}`.repeat(boxes) : ''
    result += looseGifts > 0 ? `(${letter.repeat(looseGifts)})` : ''
  }

  return result
}
