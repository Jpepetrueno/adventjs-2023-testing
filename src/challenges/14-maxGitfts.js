// This is a common problems that can be solved using dynamic programming
function maxGifts(houses) {
  if (
    houses.length === 0 ||
    !Array.isArray(houses) ||
    houses.some(house => !Number.isInteger(house) || house < 0)
  ) {
    throw new Error('Invalid input')
  }

  let currentHouseGifts = houses[0]
  let previousHouseGifts = 0
  let newExcludedHouseGifts

  for (let i = 1; i < houses.length; i++) {
    newExcludedHouseGifts = Math.max(currentHouseGifts, previousHouseGifts)
    currentHouseGifts = previousHouseGifts + houses[i]
    previousHouseGifts = newExcludedHouseGifts
  }

  return Math.max(currentHouseGifts, previousHouseGifts)
}

const houses = [5, 1, 2, 6]

console.log(maxGifts(houses))

export default maxGifts
