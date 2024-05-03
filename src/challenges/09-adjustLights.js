export function adjustLights(lights) {
  // Verificar si lights es un array
  if (!Array.isArray(lights)) {
    throw new Error('Lights must be an array')
  }
  // Verificar si lights tiene al menos dos elementos
  if (lights.length < 2) {
    throw new Error('Lights array must have at least two elements')
  }
  // Verificar si cada elemento en lights es '🔴' o '🟢'
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== '🔴' && lights[i] !== '🟢') {
      throw new Error('Each element in lights array must be 🔴 or 🟢')
    }
  }

  let lightsForward = [...lights]
  let changesForward = 0
  for (let i = 0; i < lightsForward.length - 1; i++) {
    if (lightsForward[i] === lightsForward[i + 1]) {
      changesForward++
      lightsForward[i + 1] = lightsForward[i] === '🔴' ? '🟢' : '🔴'
    }
  }

  let lightsBackward = [...lights]
  let changesBackward = 0
  for (let i = lightsBackward.length - 1; i >= 0; i--) {
    if (lightsBackward[i] === lightsBackward[i - 1]) {
      changesBackward++
      lightsBackward[i - 1] = lightsBackward[i] === '🔴' ? '🟢' : '🔴'
    }
  }

  let changes = 0
  if (changesForward < changesBackward) {
    changes = changesForward
  } else {
    changes = changesBackward
  }

  return changes
}
