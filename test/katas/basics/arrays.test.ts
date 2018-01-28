import {
  anyArray,
  arrayOfNumbers,
  arrayOfUsers,
  mixedArray,
  numberArray,
  numberArrayTwo,
  User
} from '../../../src/katas/basics/arrays'

describe('Arrays', () => {
  let result
  it('includes only elements of type number (first)', () => {
    numberArray.forEach(element => {
      expect(typeof element === 'number').toBeTruthy()
    })
  })
  it('includes only elements of type number (second)', () => {
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
  it('includes only elements of type number (third)', () => {
    arrayOfNumbers.forEach(element => {
      expect(typeof element === 'number').toBeTruthy()
    })
  })
  it('includes only elements of type user', () => {
    arrayOfUsers.forEach(element => {
      expect(element instanceof User).toBeTruthy()
    })
  })
})