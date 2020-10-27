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
    throw new Error("Remove this statement and implement this function");
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

    // return result.reduce((a, b) => (a * a) + (b * b), 0)
  }

  get difference() {
    throw new Error("Remove this statement and implement this function");
  }
}
