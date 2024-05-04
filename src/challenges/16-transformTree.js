export function transformTree(tree) {
  // Check if the input is an array and if all elements are either numbers or null
  if (
    !Array.isArray(tree) ||
    tree.some(element => typeof element !== 'number' && element !== null)
  ) {
    // If the input is invalid, throw an error
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

  // Create the root of the tree and assign it to root
  let root = createNode(0)

  return root
}
