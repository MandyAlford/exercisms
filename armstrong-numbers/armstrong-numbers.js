//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
// 9 = 9^1 = 9
// 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// split number into digits.
// take each number and multiply it by the number of digits (length of array?)
// if those sums equal the original number, return true

export const isArmstrongNumber = (num) => {
  let numArray = num.toString().split('')
  let sums = [];

  for(var i = 0; i < numArray.length; i++) {
    let test = parseInt(Math.pow(numArray[i], numArray.length))
    sums.push(test)
  }
  let answer = sums.reduce(function(a, b){
      return a + b;
  }, 0);
  if (answer === num) {
    return true
  } else {
    return false
  }
};
