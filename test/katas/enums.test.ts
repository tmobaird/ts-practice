import { Greeting, Reply } from '../../src/katas/enums'

describe('enums', () => {
  describe('Reply', () => {
    it('returns true', () => {
      expect(Reply.Yes).toEqual(1)
    })
    it('returns false', () => {
      expect(Reply.No).toEqual(0)
    })
  })

  describe('Greeting', () => {
    it('returns Hello, friend', () => {
      expect(Greeting.Normal).toEqual('Hello, friend')
    })
    it('returns Howdy, partner', () => {
      expect(Greeting.Cowboy).toEqual('Howdy, partner')
    })
    it('returns Old friend, hello', () => {
      expect(Greeting.Yoda).toEqual('Old friend, hello')
    })
  })
})
