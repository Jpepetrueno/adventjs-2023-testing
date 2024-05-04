/**
 * This function checks which gifts can be manufactured based on the available materials.
 * @param {string[]} gifts - An array of gifts, each represented as a string.
 * @param {string} materials - A string representing the available materials.
 * @returns {string[]} An array of gifts that can be manufactured.
 * @throws {Error} Will throw an error if the input is invalid.
 */
function manufacture(gifts, materials) {
  // Check if 'gifts' is an array of strings and 'materials' is a non-empty string without spaces
  if (
    !Array.isArray(gifts) ||
    !gifts.every(gift => typeof gift === 'string') ||
    typeof materials !== 'string' ||
    materials.length === 0 ||
    materials.includes(' ')
  ) {
    throw new Error('Invalid input')
  }

  // Initialize an array to store the gifts that can be manufactured
  let canBeMade = []

  // Iterate over each gift
  for (let gift of gifts) {
    // Assume the gift can be made until proven otherwise
    let canMake = true

    // Iterate over each character in the gift
    for (let char of gift) {
      // If the materials do not include the current character, the gift cannot be made
      if (!materials.includes(char)) {
        canMake = false
        break
      }
    }

    // If the gift can be made, add it to the 'canBeMade' array
    if (canMake) {
      canBeMade.push(gift)
    }
  }

  // Return the array of gifts that can be manufactured
  return canBeMade
}

export default manufacture
