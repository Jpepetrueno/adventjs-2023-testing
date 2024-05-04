// La función createChristmasTree toma dos argumentos: ornaments y height.
// ornaments es una cadena de caracteres que representa los adornos del árbol.
// height es un número entero que representa la altura del árbol.
export function createChristmasTree(ornaments, height) {
  // Verifica si ornaments es una cadena no vacía y no solo espacios en blanco.
  if (
    typeof ornaments !== 'string' ||
    ornaments.length === 0 ||
    ornaments.trim() === ''
  ) {
    throw new Error(
      'The first argument must be a string with at least one character different to spaces or empty'
    )
  }

  // Verifica si height es un número entero mayor que 1.
  if (typeof height !== 'number' || height <= 1 || !Number.isInteger(height)) {
    throw new Error('The second argument must be an integer greater than 1')
  }

  // Inicializa el árbol como una cadena vacía y el índice del adorno como 0.
  let tree = ''
  let ornamentIndex = 0

  // Construye el árbol línea por línea.
  for (let i = 0; i < height; i++) {
    // Añade espacios en blanco al principio de la línea para centrar el árbol.
    tree += ' '.repeat(height - i - 1)

    // Añade los adornos a la línea.
    for (let j = 0; j <= i; j++) {
      tree += ornaments[ornamentIndex % ornaments.length] + ' '
      ornamentIndex++
    }

    // Añade la línea al árbol.
    tree = ' '.repeat(height - 1) + tree.trim() + '\n'
  }

  // Añade el tronco del árbol.
  tree += ' '.repeat(height - 1) + '|' + '\n'

  // Devuelve el árbol.
  return tree
}
