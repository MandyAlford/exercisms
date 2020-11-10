//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//.

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    throw new Error("Remove this statement and implement this function");
  }

  allergicTo(food) {
    let keys = Object.values(allergens)

    console.log(this.score)
    console.log(allergens[food])

    if(allergens[food] === this.score){
      return true
    } else {
      return false
    }
  }
}


const allergens = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
}

// const allergens = {
//   1: 'eggs',
//   2: 'peanuts',
//   4: 'shellfish',
//   8: 'strawberries',
//   16: 'tomatoes',
//   32: 'chocolate',
//   64: 'pollen',
//   128: 'cats'
// }
