/*
 Performed on: 01/30/2018

 Program to translate a given DNA sequence to RNA.
 The exercism exercise for this can be found at:
 http://exercism.io/exercises/typescript/rna-transcription/readme

 Rules:
 - The DNA to RNA chart is as follows:
    - C -> G
    - G -> C
    - T -> A
    - A -> U
 - If a given DNA sequence is invalid throw error with message:

   'Invalid input DNA.'

 When practicing:
 - Estimated duration: 15 minutes
 - Reuse previously created spec file for validation
*/

type RNATide = 'G' | 'C' | 'A' | 'U'

const dnaToRnaMap: { [x: string]: RNATide } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRNA = (strand: string): string => {
  let result = ''
  for (let tide of strand) {
    if (dnaToRnaMap[tide]) {
      result += dnaToRnaMap[tide]
    } else {
      throw new Error('Invalid input DNA.')
    }
  }
  return result
}
