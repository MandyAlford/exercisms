//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  let differences = 0
  // console.log('1', strand1)
  // console.log('2', strand2)

  // compare character by character of both arrays
if(strand1.length !== strand2.length) {
  throw new Error('left and right strands must be of equal length')
}

  for(var i=0; i<= strand1.length; i++) {
    if(strand1[i] !== strand2[i]){
      differences += 1
    }
  }
  return differences
};
