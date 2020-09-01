//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  if (strand1 === '' && strand2 === '') {
    return 0
  } else if (strand1 === ''){
    throw new Error('left strand must not be empty')
  } else if (strand2 === '') {
    throw new Error('right strand must not be empty')
  } else if(strand1.length !== strand2.length) {
    throw new Error('left and right strands must be of equal length')
  }

//  solution with reduce
  // let splitStrand= strand1.split('')

  // return splitStrand.reduce((acc, letter, index)=> {
  //   if(strand2[index] !== letter) {
  //     acc++
  //   }
  //   return acc
  // }, 0)

  let differences = 0
  for(var i=0; i<= strand1.length; i++) {
    if(strand1[i] !== strand2[i]){
      differences += 1
    }
  }
  return differences
};
