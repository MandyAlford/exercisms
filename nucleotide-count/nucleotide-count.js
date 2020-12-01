
export class NucleotideCounts {
  static parse(nucleotides) {
    // console.log(nucleotides.split(''))

    let counts = nucleotides.split('').reduce((acc, nucleotide) => {
      // console.log(acc[nucleotide])
      acc[nucleotide]++
      return acc
    }, {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    })
    console.log(counts)
    return `${counts['A']} ${counts['C']} ${counts['G']} ${counts['T']}`
  }
}
