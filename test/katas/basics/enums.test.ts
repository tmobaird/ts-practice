import { Color, Counter, Greeting, MLBNamesByCity, Reply } from '../../../src/katas/basics/enums'

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

  describe('MLBNamesByCity', () => {
    it('returns Cubs', () => {
      expect(MLBNamesByCity.Chicago).toEqual('Cubs')
    })
    it('returns Nationals', () => {
      expect(MLBNamesByCity.Washington).toEqual('Nationals')
    })
  })

  describe('Counter', () => {
    it('returns 5', () => {
      expect(Counter.First).toEqual(5)
    })
    it('returns 6', () => {
      expect(Counter.Second).toEqual(6)
    })
  })

  describe('Color', () => {
    it('returns #0DFF00', () => {
      expect(Color.Green).toEqual('#0DFF00')
    })
    it('returns #FF0000', () => {
      expect(Color.Red).toEqual('#FF0000')
    })
    it('returns #0015FF', () => {
      expect(Color.Blue).toEqual('#0015FF')
    })
  })
})
