//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//,

export class BankAccount {

  constructor() {
    this.total = 0;
  }

  open() {
    return 0
  }

  close() {
   this.total = null
  }

  deposit(amount) {
    if (this.total === null) {
      throw new ValueError()
    } else {
      this.total += amount
    }
  }

  withdraw(amount) {
    this.total -= amount
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
