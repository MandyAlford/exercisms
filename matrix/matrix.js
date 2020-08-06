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
    // console.log(splitData)

    // newData = array of arrays containing strings
    let newData = splitData.map(element => {
       return element.split(' ')
    })
    // rowsData = array of arrays containing integers
    let rowsData = newData.map(element => {
      return element.map(string => {
        return parseInt(string)
      })
    })
    return rowsData
  }

  get columns() {
    let columns = [[]]

    let rowsData = this.rows

// loop over each row array and group all same indexes together in new arrays
    rowsData.forEach(row => {
      for(var i = 0; i < row.length; i++) {
        if(columns[i]) {
          columns[i].push(row[i])
        } else {
        let array = []
        columns.push(array)
        columns[i].push(row[i])
        }
      }
    })
    return columns
  }

}
