class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.actionCounter = 0;
  }

  shoot() {
    this.actionCounter++;
    this.actionCounter >= 3 ? this.cranky = true : this.cranky;
    return this.cranky === true ? 'NO!' : 'Twang!!!';
  }

  run() {
    this.actionCounter++;
    this.actionCounter >= 3 ? this.cranky = true : this.cranky;
    return this.cranky === true ? 'NO!' : 'Clop clop clop clop!!!';    
  }

}

module.exports = Centaur;
