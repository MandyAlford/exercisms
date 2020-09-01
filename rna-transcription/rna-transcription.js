//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  let nucleotideArray = rna.split('')
  let rnaReturn = ''

  nucleotideArray.forEach((nucleotide) => {
    rnaReturn = rnaReturn + nucleotides[nucleotide]
  })

  return rnaReturn
};

const nucleotides = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
  '': ''
}
