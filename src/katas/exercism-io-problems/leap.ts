/*
 Program to determine if a year is a leap year or not.
 The exercism exercise for this can be found at:
 http://exercism.io/exercises/typescript/leap/readme

 Rules:
 - on every year that is evenly divisible by 4
 -  except every year that is evenly divisible by 100
 -    unless the year is also evenly divisible by 400

 When practicing:
 - Estimated duration: 15 minutes
 - Reuse previously created spec file for validation
*/

export const isLeapYear = (year: number): boolean => {
  if (isEvenlyDivisibleBy(year, 400)) return true
  if (isEvenlyDivisibleBy(year, 100)) return false
  return isEvenlyDivisibleBy(year, 4)
}

export const isEvenlyDivisibleBy = (year: number, divisibleBy: number): boolean => {
  return year % divisibleBy === 0
}
