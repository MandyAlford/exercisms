//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  let result = {}
  let phraseArray = phrase.split(' ')

  for(var i = 0; i < phraseArray.length; i++) {
    // console.log(result[phraseArray[i]])
    if(!result[phraseArray[i]]) {
      result[phraseArray[i]] = 1
    } else {
      result[phraseArray[i]] ++
    }
  }
  return result;
};
