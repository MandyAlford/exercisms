//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

// The quick brown fox jumps over the lazy dog.
//
// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

export const isPangram = (sentence) => {
  let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let lowercaseSentence = sentence.toLowerCase();
  let chars =  lowercaseSentence.split('')
  let index

  chars.forEach((character) => {
    if(alphabet.includes(character)){
      index = alphabet.indexOf(character)
      alphabet.splice(index, 1)
    }
  });

  if (alphabet.length === 0 ){
    return true
  } else {
    return false
  }
};
