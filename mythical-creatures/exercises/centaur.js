class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.actionCounter = 0;
    this.layingDown = false;
  }

  shoot() {
    this.actionCounter++;
    this.actionCounter >= 3 ? this.cranky = true : this.cranky;
    return this.cranky === true ? 'NO!'
      : this.layingDown === true ? 'NO!'
      : 'Twang!!!';
  }

  run() {
    this.actionCounter++;
    this.actionCounter >= 3 ? this.cranky = true : this.cranky;
    return this.cranky === true ? 'NO!'
      : this.layingDown === true ? 'NO!'
      : 'Clop clop clop clop!!!';
  }

  sleep() {
    var snoring = this.standing === true ? 'NO!' : ('ZZZZ');
    this.standing ? this.cranky : (this.cranky = false, this.actionCounter = 0);
    return snoring;
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    var denial = '';

    if (this.cranky === false && this.standing === true) {
      this.cranky = true;
      return;
    }  

    this.standing === true ? (this.cranky = false, this.actionCounter = 0) : denial = "Not while I'm laying down!";
    return denial.length > 0 ? "Not while I'm laying down!" : null;
  }
}

module.exports = Centaur;
