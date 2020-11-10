//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//.

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergiesList = [];
    this.result = [];
  }

  list() {
    let x = this.allergicTo('x')
    return this.result.map(value => {
      return allergenList[value]
    })
  }

  allergicTo(food) {
    if(this.score === 0){
      return false
    }

    let keys = Object.values(allergens)
    let tracker = this.score

    for(var i = (keys.length - 1); i >=0; i--) {
      if(tracker < keys[i]) {

      } else if(tracker >= keys[i]) {
         tracker = tracker - keys[i]
         this.result.unshift(keys[i])
       }
    }
    return this.result.includes(allergens[food])
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

const allergenList = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
}
