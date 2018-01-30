import { toRNA } from '../../../src/katas/exercism-io-problems/rna-transcription'

describe('RNA Transcription', () => {
  describe('toRNA', () => {
    it('returns C', () => {
      expect(toRNA('G')).toEqual('C')
    })
    it('returns G', () => {
      expect(toRNA('C')).toEqual('G')
    })
    it('returns A', () => {
      expect(toRNA('T')).toEqual('A')
    })
    it('returns U', () => {
      expect(toRNA('A')).toEqual('U')
    })
    it('transcribes all dna nucleotides to their rna complements', () => {
      expect(toRNA('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU')
    })
    it('correctly handles invalid input', () => {
      expect(() => toRNA('U')).toThrowError('Invalid input DNA.')
    })
    it('correctly handles completely invalid input', () => {
      expect(() => toRNA('XXX')).toThrowError('Invalid input DNA.')
    })
    it('correctly handles partially invalid input', () => {
      expect(() => toRNA('ACGTXXXCTTAA')).toThrowError('Invalid input DNA.')
    })
  })
})
