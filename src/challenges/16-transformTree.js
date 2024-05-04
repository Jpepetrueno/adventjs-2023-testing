/**
 * This function transforms an array representation of a binary tree into a tree data structure.
 * @param {Array} tree - The array representation of a binary tree.
 * @returns {Object|null} The root node of the tree, or null if the tree is empty.
 * @throws {Error} If the input is not a valid array representation of a binary tree.
 */
function transformTree(tree) {
  // Validate input: it should be an array of numbers or null values
  if (
    !Array.isArray(tree) ||
    tree.some(element => typeof element !== 'number' && element !== null)
  ) {
    throw new Error('Invalid input')
  }

  // Helper function to create a node at a given index in the array
  function createNode(index) {
    // If the index is out of bounds or the value at the index is null, return null
    if (index >= tree.length || tree[index] === null) {
      return null
    }

    // Create a new node with the value at the index and recursive calls to create left and right children
    const node = {
      value: tree[index],
      left: createNode(2 * index + 1),
      right: createNode(2 * index + 2)
    }

    return node
  }

  // Create the root of the tree by calling the helper function with the first index
  let root = createNode(0)

  // Return the root of the tree
  return root
}

export default transformTree
