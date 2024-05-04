/**
 * Generates a string representation of a Christmas tree with ornaments.
 * @param {string} ornaments - A string of characters representing the ornaments.
 * @param {number} height - An integer representing the height of the tree.
 * @returns {string} A string representation of the Christmas tree.
 * @throws {Error} If the arguments are invalid.
 */
function createChristmasTree(ornaments, height) {
  // Validate that ornaments is a non-empty string and not just whitespace
  if (
    typeof ornaments !== 'string' ||
    ornaments.length === 0 ||
    ornaments.trim() === ''
  ) {
    throw new Error(
      'The first argument must be a string with at least one character different to spaces or empty'
    )
  }

  // Validate that height is an integer greater than 1
  if (typeof height !== 'number' || height <= 1 || !Number.isInteger(height)) {
    throw new Error('The second argument must be an integer greater than 1')
  }

  // Initialize the tree as an empty string and the ornament index as 0
  let tree = ''
  let ornamentIndex = 0

  // Build the tree line by line
  for (let i = 0; i < height; i++) {
    // Add whitespace at the beginning of the line to center the tree
    tree += ' '.repeat(height - i - 1)

    // Add the ornaments to the line
    for (let j = 0; j <= i; j++) {
      tree += ornaments[ornamentIndex % ornaments.length] + ' '
      ornamentIndex++
    }

    // Add the line to the tree
    tree = ' '.repeat(height - 1) + tree.trim() + '\n'
  }

  // Add the trunk of the tree
  tree += ' '.repeat(height - 1) + '|' + '\n'

  // Return the tree
  return tree
}

export default createChristmasTree
