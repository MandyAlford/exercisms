//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(sum) {
    this.sum = sum;
    // this.key = []
  }

  // get baseArray() {
  //   let result = []
  //   for (var i = 0; i < this.sum; i++) {
  //     result.push(this.sum-i)
  //   }
  //   return result
  // }

  get sumOfSquares() {
    let result = []
    for (var i = 0; i < this.sum; i++) {
      result.push(this.sum - i)
    }

    return result.reduce((acc, num) => acc + (num * num), 0)
  }

  get squareOfSum() {
    let result = []
    for (var i = 0; i < this.sum; i++) {
      result.push(this.sum - i)
    }

    let sumOfArray= result.reduce((acc, num) => {
      return acc + num
    },0)
    return sumOfArray * sumOfArray
  }

  get difference() {
    throw new Error("Remove this statement and implement this function");
  }
}
