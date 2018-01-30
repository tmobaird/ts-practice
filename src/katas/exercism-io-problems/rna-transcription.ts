/*
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

type DNATide = 'C' | 'G' | 'T' | 'A'
type RNATide = 'G' | 'C' | 'A' | 'U'

export const toRNA = (strand: string): string => {
  let rnaStrand = ''
  for (let tide of strand) {
    try {
      rnaStrand += convertNucleotide(tide as DNATide)
    } catch (e) {
      throw new Error(e.message)
    }
  }
  return rnaStrand
}

const convertNucleotide = (nucleotide: DNATide): RNATide => {
  if (nucleotide === 'C') return 'G'
  if (nucleotide === 'G') return 'C'
  if (nucleotide === 'T') return 'A'
  if (nucleotide === 'A') return 'U'
  throw new Error('Invalid input DNA.')
}
