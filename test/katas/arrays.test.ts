import { anyArray, mixedArray, numberArray, numberArrayTwo, User } from '../../src/katas/arrays'

describe('Arrays', () => {
  let result
  it('includes only elements of type number', () => {
    numberArray.forEach(element => {
      expect(typeof element === 'number').toBeTruthy()
    })
  })
  it('includes only elements of type number', () => {
    numberArrayTwo.forEach(element => {
      expect(typeof element === 'number').toBeTruthy()
    })
  })
  it('includes elements of type number or string', () => {
    mixedArray.forEach(element => {
      result = typeof element === 'number' || typeof element === 'string'
      expect(result).toBeTruthy()
    })
  })
  it('includes any type', () => {
    anyArray.forEach(element => {
      result =
        typeof element === 'number' ||
        typeof element === 'string' ||
        typeof element === 'boolean' ||
        element instanceof User
      expect(result).toBeTruthy()
    })
  })
})
