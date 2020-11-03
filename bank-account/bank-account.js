//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//,

export class BankAccount {

  constructor() {
    // this.total = 0;
  }

  open() {
    if(this.total === 0) {
      throw new ValueError()      
    } else {
      this.total = 0
    }
  }

  close() {
    if ((this.total === null) || (this.total === undefined)) {
      throw new ValueError()
    } else {
   this.total = null
    }
  }

  deposit(amount) {
    if (this.total === null) {
      throw new ValueError()
    } else {
      this.total += amount
    }
  }

  withdraw(amount) {
    if( (this.total === null) || (this.total < amount)) {
      throw new ValueError()
    } else {
    this.total -= amount
    }
  }

  get balance() {
    if(this.total === null) {
      throw new ValueError()
    } else {
      return this.total
    }
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}
