//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
// 2 points: "D", "G",
// 3 points: "B", "C", "M", "P",
// 4 points: "F", "H", "V", "W", "Y",
// 5 points: "K",
// 8 points: "J", "X",
// 10 points: "Q", "Z",

export const transform = (old) => {
  // array of key values/numbers
  let oldKeys = Object.keys(old)
  // console.log(oldKeys)

// iterate over oldKeys
  let output = {}
  oldKeys.forEach(number => {
      let newObject = old[number].reduce((acc, value) => {
        acc[value.toLowerCase()] = parseInt(number)
        return acc
      },{})
      output = Object.assign(output, newObject)
  })
  return output

};
