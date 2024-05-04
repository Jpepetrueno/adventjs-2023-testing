function findFirstRepeated(gifts) {
  if (Array.isArray(gifts) === false || gifts.length === 0) {
    throw new Error('Invalid input')
  }

  // This line creates a new Set object 'idSet'. A Set is a collection of unique values.
  let idSet = new Set()

  for (let i = 0; i < gifts.length; i++) {
    // This line checks if the current element already exists in the 'idSet'.
    // If it does, that means it's a repeated element, so it returns that element.
    if (idSet.has(gifts[i])) {
      return gifts[i]
    }

    // If the current element doesn't exist in the 'idSet', it adds the element to the 'idSet'.
    idSet.add(gifts[i])
  }

  // If the function hasn't returned yet after the loop, that means there are no repeated elements.
  // So it returns -1 to indicate no repetition found.
  return -1
}

export default findFirstRepeated
