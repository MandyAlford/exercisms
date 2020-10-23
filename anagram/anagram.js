//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (string, choices) => {
  let placeholder = []
  let sortedString = string.split('').sort().join('').toLowerCase()

  for(var i = 0; i < choices.length; i++) {
    if (choices[i].split('').sort().join('').toLowerCase() === sortedString) {
      placeholder.push(choices[i])
    }
  }
  return placeholder
}
