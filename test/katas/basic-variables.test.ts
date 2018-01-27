import { showBoolean, showNumber, showString } from '../../src/katas/basic-variables'

describe('variables', () => {
  describe('numbers', () => {
    it('returns 5', () => {
      expect(showNumber()).toEqual(5)
    })
  })

  describe('strings', () => {
    it('returns typescript is awesome', () => {
      expect(showString()).toEqual('Typescript is awesome')
    })
  })

  describe('booleans', () => {
    it('returns true', () => {
      expect(showBoolean()).toBeTruthy()
    })
  })
})
