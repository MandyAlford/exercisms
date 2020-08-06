//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//.

export class Matrix {
  constructor(data) {
    this.data = data;
  }

  get rows() {
    let splitData = this.data.split('\n');
    let parsedData = [];
    // console.log(splitData)

    // numData = array of arrays containing strings
    let newData = splitData.map(element => {
       return element.split(' ')
    })
    let numData = newData.map(element => {
      return element.map(string => {
        return parseInt(string)
      })
    })
    return numData
  }

  get columns() {
    throw new Error("Remove this statement and implement this function");
  }
}
