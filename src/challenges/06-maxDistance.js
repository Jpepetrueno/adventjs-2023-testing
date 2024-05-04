/**
 * Calculates the maximum distance that can be covered based on the given movements.
 * @param {string} movements - A string representing the sequence of movements with '<', '>', or '*'.
 * @returns {number} The maximum distance that can be covered.
 * @throws {Error} If the input is not a string or contains invalid characters.
 */
function maxDistance(movements) {
  // Validate input: it should be a non-empty string of '<', '>', and '*'
  if (
    typeof movements !== 'string' ||
    !movements ||
    !/^[><*]+$/.test(movements)
  )
    throw new Error('Invalid input')

  // Initialize counters for right and left moves and stars
  let rightMoves = 0
  let leftMoves = 0
  let stars = 0

  // Iterate over the movements and update the counters
  for (const move of movements) {
    if (move === '>') {
      rightMoves++
    } else if (move === '<') {
      leftMoves++
    } else if (move === '*') {
      stars++
    }
  }

  // Calculate the maximum distance based on the counters
  const distance = Math.abs(rightMoves - leftMoves) + stars

  return distance
}

export default maxDistance
