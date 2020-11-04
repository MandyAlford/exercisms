export class Clock {
  constructor(hour, min = 0) {
   this.hour = hour;
   this.min = min;
  }

  hourConversion() {
    while(this.hour >= 24){
      this.hour = this.hour - 24  
    }
    while (this.hour < 0) {
      this.hour = 24 + this.hour
    }
    if ((this.hour < 10) && (this.hour >= 0)) {
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
    if ((this.min >= 0) && (this.min < 10)) {
      this.min = '0' + this.min
    }
  }

  toString() {
    this.minConversion()
    this.hourConversion()

    return `${this.hour}:${this.min}`
  }

  plus(minToAdd) {
   this.min = this.min + minToAdd
    return this
  }

  minus(minToSubtract) {
    this.min = this.min - minToSubtract
    return this
  }

  equals(instance) {
    if(this.toString() === instance.toString()) {
      return true
    } else {
      return false
    }
  }
}
