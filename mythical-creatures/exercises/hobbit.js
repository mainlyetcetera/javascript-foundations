class Hobbit {
  constructor (name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    name === 'Frodo' ? this.hasRing = true : this.hasRing = false;
  }

  celebrateBirthday() {
    this.age++;
    this.age > 32 ? this.adult = true : this.adult;
    this.age >= 101 ? this.old = true : this.old;
  }

}

module.exports = Hobbit;