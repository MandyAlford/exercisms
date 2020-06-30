//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//.

export class Triangle {
  constructor(a, b, c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  isEquilateral() {
    if(this.sideA === this.sideB && this.sideA === this.sideC && this.sideA !== 0) {
      return true
    } else {
      return false
    }
  }

  isIsosceles() {
    if(
      ((this.sideA + this.sideB) > this.sideC)
      && this.sideA === this.sideB
      || ((this.sideC + this.sideB) > this.sideA)
      && this.sideB === this.sideC
      || ((this.sideA + this.sideC) > this.sideB)
      && this.sideA === this.sideC) {
      return true
    } else {
      return false
    }
  }

  isScalene() {
    if((this.sideA !== this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC)
    && ((this.sideA + this.sideB) >= this.sideC
    && (this.sideC + this.sideB) >= this.sideA
    && (this.sideA + this.sideC) >= this.sideB)) {
      return true
    } else {
      return false
    }
  }
}
