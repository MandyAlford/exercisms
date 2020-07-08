//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (test = '') => {
  let translation = [];
  let codons = test.split('');
  if(test === ''){
    return [];
  } else {
    // for(var i = 0; i <= 3; i++){}
      let codon = codons[0]+ codons[1]+ codons[2]
      console.log(codon)
      let result = proteins[codon];
      translation.push(result)

    // console.log(codons)
    return translation;
  }

  // break string into strings of 3
  // check proteins obj for each string for a match
  // put value into array
  // repeat until hitting a stop string
  // when you hit a stop, return the array of proteins
  // throw new Error("Remove this statement and implement this function");
};

let proteins = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
}
