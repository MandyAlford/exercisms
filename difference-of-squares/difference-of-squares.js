export class Squares {
  constructor(sum) {
    this.sum = sum;
    this.key = this.baseArray
  }

  get baseArray() {
    let result = []
    for (var i = 0; i < this.sum; i++) {
      result.push(this.sum-i)
    }
    return result
  }

  get sumOfSquares() {
    return this.key.reduce((acc, num) => acc + (num * num), 0)
  }

  get squareOfSum() {
    let sumOfArray = this.key.reduce((acc, num) => {
      return acc + num
    },0)
    return sumOfArray * sumOfArray
  }

  get difference() {
    let squaresOfSums = this.squareOfSum
    let sumOfSquares = this.sumOfSquares

    return squaresOfSums - sumOfSquares
  }
}
