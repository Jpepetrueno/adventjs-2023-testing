/**
 * This function calculates the maximum number of gifts that can be collected from a row of houses,
 * given that gifts cannot be collected from two adjacent houses.
 * @param {number[]} houses - An array of integers representing the number of gifts in each house.
 * @returns {number} The maximum number of gifts that can be collected.
 * @throws {Error} If the input is not a valid array of non-negative integers.
 */
function maxGifts(houses) {
  // Validate input: it should be a non-empty array of non-negative integers
  if (
    houses.length === 0 ||
    !Array.isArray(houses) ||
    houses.some(house => !Number.isInteger(house) || house < 0)
  ) {
    throw new Error('Invalid input')
  }

  // Initialize variables for the algorithm to track the maximum number of gifts collected from the current and previous houses
  let currentHouseGifts = houses[0]
  let previousHouseGifts = 0
  let newExcludedHouseGifts

  // Iterate over the houses array starting from the second house
  for (let i = 1; i < houses.length; i++) {
    newExcludedHouseGifts = Math.max(currentHouseGifts, previousHouseGifts)
    currentHouseGifts = previousHouseGifts + houses[i]
    previousHouseGifts = newExcludedHouseGifts
  }

  return Math.max(currentHouseGifts, previousHouseGifts)
}

export default maxGifts
