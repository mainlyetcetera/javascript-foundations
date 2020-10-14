class Vampire {
  constructor(name, pet) {
    this.name = name;
    pet === undefined ? this.pet = 'bat' : this.pet = pet;
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }

}

module.exports = Vampire;