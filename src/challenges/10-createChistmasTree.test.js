import createChristmasTree from './10-createChistmasTree'

describe('createChristmasTree', () => {
  // Verifica si createChristmasTree es una función.
  test('should be a function', () => {
    expect(typeof createChristmasTree).toBe('function')
  })

  // Verifica si createChristmasTree lanza un error cuando no se proporcionan dos argumentos,
  // cuando el primer argumento no es una cadena, o cuando el segundo argumento no es un número.
  test('should throw an error if no two arguments is provided, the first one most be a string and the second one a number', () => {
    expect(() => createChristmasTree()).toThrow()
    expect(() => createChristmasTree('test')).toThrow()
    expect(() => createChristmasTree('test', 'test')).toThrow()
    expect(() => createChristmasTree(1)).toThrow()
  })

  // Verifica si createChristmasTree lanza un error cuando el primer argumento es una cadena vacía o solo espacios en blanco.
  test('should throw an error if the first argument is not a string with at least one character different to spaces or empty', () => {
    expect(() => createChristmasTree('', 1)).toThrow()
    expect(() => createChristmasTree(' ', 1)).toThrow()
  })

  // Verifica si createChristmasTree lanza un error cuando el segundo argumento no es un número entero mayor que 1.
  test('should throw an error if the second argument is not a integer greater than 1', () => {
    expect(() => createChristmasTree('test', 0)).toThrow()
    expect(() => createChristmasTree('test', 1.5)).toThrow()
    expect(() => createChristmasTree('test', -1)).toThrow()
  })

  // Verifica si createChristmasTree devuelve el árbol de Navidad correcto.
  test('should return the correct Christmas tree', () => {
    const tree = createChristmasTree('xo', 3)
    const expectedTree = '  x\n o x\no x o\n  |\n'
    expect(tree).toBe(expectedTree)
  })
})
