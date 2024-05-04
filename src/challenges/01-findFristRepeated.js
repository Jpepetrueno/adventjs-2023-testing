/**
 * This function finds the first repeated element in an array of gifts.
 * @param {string[]} gifts - An array of gifts, each represented as a string.
 * @returns {string|number} The first repeated gift if any, otherwise -1.
 * @throws {Error} Will throw an error if the input is not a non-empty array.
 */
function findFirstRepeated(gifts) {
  // Validate input: it should be a non-empty array
  if (Array.isArray(gifts) === false || gifts.length === 0) {
    throw new Error('Invalid input')
  }

  // Create a new Set to store unique gifts
  let idSet = new Set()

  // Iterate over the gifts array
  for (let i = 0; i < gifts.length; i++) {
    // If the gift is already in the Set, it's a repeated gift. Return it.
    if (idSet.has(gifts[i])) {
      return gifts[i]
    }

    // If the gift is not in the Set, add it to the Set
    idSet.add(gifts[i])
  }

  // If no repeated gift is found after checking all gifts, return -1
  return -1
}

export default findFirstRepeated
