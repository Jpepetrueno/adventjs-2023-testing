/**
 * This function adjusts the lights by changing their colors to ensure no two adjacent lights have the same color.
 * It calculates the minimum number of changes required to achieve this.
 * @param {string[]} lights - An array of lights, each represented as a string '🔴' or '🟢'.
 * @returns {number} The minimum number of changes required to ensure no two adjacent lights have the same color.
 * @throws {Error} If the input is not a valid array of lights.
 */
export function adjustLights(lights) {
  // Validate input: it should be a non-empty array of '🔴' or '🟢'
  if (!Array.isArray(lights)) {
    throw new Error('Lights must be an array')
  }
  if (lights.length < 2) {
    throw new Error('Lights array must have at least two elements')
  }
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== '🔴' && lights[i] !== '🟢') {
      throw new Error('Each element in lights array must be 🔴 or 🟢')
    }
  }

  // Initialize arrays for forward and backward adjustments
  let lightsForward = [...lights]
  let changesForward = 0
  // Adjust lights in forward direction
  for (let i = 0; i < lightsForward.length - 1; i++) {
    if (lightsForward[i] === lightsForward[i + 1]) {
      changesForward++
      lightsForward[i + 1] = lightsForward[i] === '🔴' ? '🟢' : '🔴'
    }
  }

  // Initialize arrays for forward and backward adjustments
  let lightsBackward = [...lights]
  let changesBackward = 0
  // Adjust lights in backward direction
  for (let i = lightsBackward.length - 1; i >= 0; i--) {
    if (lightsBackward[i] === lightsBackward[i - 1]) {
      changesBackward++
      lightsBackward[i - 1] = lightsBackward[i] === '🔴' ? '🟢' : '🔴'
    }
  }

  // Calculate the minimum number of changes required
  let changes = 0
  if (changesForward < changesBackward) {
    changes = changesForward
  } else {
    changes = changesBackward
  }

  // Return the minimum number of changes required
  return changes
}
