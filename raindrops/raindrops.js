//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// If the number has 3 as a factor, output 'Pling'.
// If the number has 5 as a factor, output 'Plang'.
// If the number has 7 as a factor, output 'Plong'.

export const convert = (num) => {
  // determine the factors of number
  let output = ''
  let factors = []

  for(var i = 1; i <= num; i++) {
    if(num % i == 0){
      factors.push(i)
    }
  }

  factors.forEach((element => {
    console.log(Object.keys(Keys))
    if(Object.keys(Keys).includes(element.toString())) {
      output = output + Keys[element]
    }
  }))

  // console.log(output)

  if(output != '') {
    return output
  } else {
    return num.toString()
  }
  // check the factors for 3, 5, or 7
  // return the corresponding outputs
  // if 3.5.7 do not exist in factors, return num
};

const Keys = {
  '3': 'Pling',
  '5': 'Plang',
  '7': 'Plong'
}
