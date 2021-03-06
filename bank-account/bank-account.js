export class BankAccount {

  constructor() {
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
    if ((this.total === null) || (amount < 0)) {
      throw new ValueError()
    } else {
      this.total += amount
    }
  }

  withdraw(amount) {
    if( (this.total === null) || (this.total < amount) || (amount < 0)) {
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
