//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//.

export class Clock {
  constructor(hour, min = 0) {
   this.hour = hour;
   this.min = min;
  }

  hourConversion() {
    while(this.hour >= 12){
      this.hour = this.hour - 12
    }
    while (this.hour < 0) {
      this.hour = 24 + this.hour
    }
    if (this.hour.toString().length === 1) {
      this.hour = '0' + this.hour
    } 
  }

  minConversion() {
    let hoursToAdd = 0
    while(this.min > 59) {
      this.min = this.min - 60
      hoursToAdd++
    }
    while (this.min < 0) {
      this.min = 60 + this.min
      hoursToAdd--
    }

    this.hour = this.hour + hoursToAdd
    if (this.min.toString().length === 1) {
      this.min = '0' + this.min
    }
  }

  toString() {

    this.minConversion()
    this.hourConversion()

    return `${this.hour}:${this.min}`
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
