

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
