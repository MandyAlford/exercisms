//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
// /g in regex, both in parens and out
// /g

export const countWords = (phrase) => {
  let result = {}
  // let phraseArray = phrase.replace(/(,\n|, |,)/g, ' ').split(' ')
  let phraseArray = phrase.replace(/(\W\n|\W+)/g, ' ').trimEnd().toLowerCase().split(' ')



  // let filteredArray = phraseArray.filter(word => re)
  // console.log('phrase', phrase)
  // console.log('newString', newString)
  console.log('phraseArray', phraseArray)

  for(var i = 0; i < phraseArray.length; i++) {
    // console.log(result[phraseArray[i]])
    if(!result[phraseArray[i]]) {
      result[phraseArray[i]] = 1
    } else {
      result[phraseArray[i]] ++
    }
  }
  console.log('result', result)
  return result;
};
