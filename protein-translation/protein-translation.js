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
    while (codons.length > 0){
      let codon = codons.splice(0, 3);
      let joined = codon.join('');
      //
      // console.log(proteins[joined])
      let result = proteins[joined];

      if(result !=  'STOP'){
        translation.push(result)
      } else {
        return translation;
      }
    }
    }
      console.log('translation', translation)
  return translation;
};



  // break string into strings of 3
  // check proteins obj for each string for a match
  // put value into array
  // repeat until hitting a stop string
  // when you hit a stop, return the array of proteins
  // throw new Error("Remove this statement and implement this function");


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
