import { isLeapYear } from '../../../src/katas/exercism-io-problems/leap'

describe('leap', () => {
  describe('isLeapYear', () => {
    describe('when year is 1997', () => {
      it('returns false', () => {
        expect(isLeapYear(1997)).toBeFalsy()
      })
    })
    describe('when year is 1996', () => {
      it('returns true', () => {
        expect(isLeapYear(1996)).toBeTruthy()
      })
    })
    describe('when year is 1900', () => {
      it('returns false', () => {
        expect(isLeapYear(1900)).toBeFalsy()
      })
    })
    describe('when year is 2000', () => {
      it('returns true', () => {
        expect(isLeapYear(2000)).toBeTruthy()
      })
    })

    describe('Additional example of a leap year that', () => {
      it('is not a leap year', () => {
        expect(isLeapYear(1978)).toBeFalsy()
      })
      it('is a common leap year', () => {
        expect(isLeapYear(1992)).toBeTruthy()
      })
      it('is skipped every 100 years', () => {
        expect(isLeapYear(2100)).toBeFalsy()
      })
      it('is reintroduced every 400 years', () => {
        expect(isLeapYear(2400)).toBeTruthy()
      })
    })
  })
})
