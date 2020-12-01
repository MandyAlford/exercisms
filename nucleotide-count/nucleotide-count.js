
export class NucleotideCounts {
  static parse(nucleotides) {
    let counts = nucleotides.split('').reduce((acc, nucleotide) => {
      acc[nucleotide]++
      return acc
    }, {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    })
    if(Object.values(counts).length > 4) {
      throw new Error('Invalid nucleotide in strand');
    } else {
      return `${counts['A']} ${counts['C']} ${counts['G']} ${counts['T']}`
    }
  }
}
