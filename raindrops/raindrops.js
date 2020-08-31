//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.

export const convert = (num) => {

  let values = [3, 5, 7]
  let output = ''

  values.forEach((value) =>{
    if(num % value == 0){
      output = output + Keys[value.toString()]
    }
  })

  if(output != '') {
    return output
  } else {
    return num.toString()
  }
};

const Keys = {
  '3': 'Pling',
  '5': 'Plang',
  '7': 'Plong'
}
