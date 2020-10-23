export const findAnagrams = (string, choices) => {
  let placeholder = []
  let sortedString = string.toLowerCase().split('').sort().join('')

  for(var i = 0; i < choices.length; i++) {
    if (
      (choices[i].toLowerCase().split('').sort().join('') === sortedString) && 
      string.toLowerCase() != choices[i].toLowerCase()
      ) {
      placeholder.push(choices[i])
    }
  }
  return placeholder
}
