export function getIndexsForPalindrome(word) {
  // Check if the word contains only alphabets. If not, throw an error.
  if (!/^[a-z]+$/i.test(word)) {
    throw new Error('Argument must be a valid string')
  }

  // If the word is a palindrome, return an empty array.
  if (word === [...word].reverse().join('')) {
    return []
  }

  // Initialize variables to count the letters in the word.
  let letterCounts = {}
  let letter
  let oddCount = 0
  let oddLetter = ''

  // Count the occurrence of each letter in the word.
  for (let i = 0; i < word.length; i++) {
    letter = word[i]
    letterCounts[letter] = letterCounts[letter] || 0
    letterCounts[letter]++
  }

  // Check the counts of each letter. If a letter count is odd, increment the oddCount and store the letter.
  for (let letterCount in letterCounts) {
    if (letterCounts[letterCount] % 2 !== 0) {
      oddCount++
      oddLetter = letterCount
    }
  }

  // If more than one letter has an odd count, return null. This means the word cannot be rearranged into a palindrome.
  if (oddCount > 1) {
    return null
  }
  // Find the indices of the characters that need to be swapped
  let firstIndex = word.indexOf(oddLetter)
  let lastIndex = word.lastIndexOf(oddLetter)

  if (firstIndex === lastIndex) {
    let swappedIndex = [(word.length - 1) / 2, firstIndex]
    let wordArray = word.split('')
    let temp = wordArray[swappedIndex[0] - 1]
    wordArray[swappedIndex[0] - 1] = wordArray[swappedIndex[1] - 1]
    wordArray[swappedIndex[1] - 1] = temp
    let newWord = wordArray.join('')

    if (word.length === newWord.length) {
      return swappedIndex
    }
  }

  if (firstIndex !== lastIndex) {
    let leftIndex = 0
    let rightIndex = word.length - 1

    while (leftIndex < rightIndex) {
      if (word[leftIndex] !== word[rightIndex]) {
        let swapIndex = word.indexOf(word[rightIndex], leftIndex + 1)
        if (swapIndex !== -1) {
          return [leftIndex, swapIndex]
        }
      }
      leftIndex++
      rightIndex--
    }
  }

  return null
}
