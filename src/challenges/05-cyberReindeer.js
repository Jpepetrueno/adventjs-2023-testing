/**
 * Simulates Santa's sleigh movement on a road with barriers.
 * @param {string} road - A string representing the road with '.', '|', and 'S'.
 * @param {number} time - The number of time units to simulate.
 * @returns {string[]} An array representing the state of the road at each time unit.
 * @throws {Error} If the input road is not a string, is empty, contains invalid characters, or if time is not a positive integer.
 */
function cyberReindeer(road, time) {
  // Check if the input is valid
  if (
    typeof road !== 'string' ||
    !road ||
    !/^[\.\|S]+$/.test(road) ||
    (road.match(/S/g) || []).length !== 1 ||
    typeof time !== 'number' ||
    !Number.isInteger(time) ||
    time < 1
  ) {
    throw new Error('Invalid input')
  }

  // Initialize variables for simulation
  let roadArray = road.split('')
  let santaIndex = roadArray.indexOf('S')
  let timeOut = 5
  let result = [road]
  let previousState = {}

  // Simulate the sleigh movement
  for (let t = 1; t < time; t++) {
    // Open barriers after the timeout
    if (t >= timeOut) {
      roadArray = roadArray.map((char, index) => {
        if (char === '|') {
          previousState[index] = '*'
          return '*'
        }
        return char
      })
    }
    // Move Santa forward if the next position is not a barrier
    if (roadArray[santaIndex + 1] !== '|') {
      roadArray[santaIndex] = previousState[santaIndex] || '.'
      santaIndex++
      roadArray[santaIndex] = 'S'
    }
    // Add the current state to the result
    result.push(roadArray.join(''))
  }
  return result
}

export default cyberReindeer
