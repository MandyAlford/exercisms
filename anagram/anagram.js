//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (string, choices) => {
  let placeholder = []
  let sortedString = string.toLowerCase().split('').sort().join('')

  for(var i = 0; i < choices.length; i++) {
    // console.log(choices[i].toLowerCase().split('').sort().join(''))
    if (
      (choices[i].toLowerCase().split('').sort().join('') === sortedString) && 
      string.toLowerCase() != choices[i].toLowerCase()
      ) {
      placeholder.push(choices[i])
    }
  }
  // console.log(placeholder)
  // console.log(sortedString)
  return placeholder
}
