class Vampire {
  constructor(name, pet) {
    this.name = name;
    pet === undefined ? this.pet = 'bat' : this.pet = pet;
  }
}

module.exports = Vampire;