class Pirate {
  constructor(name, job) {
    this.name = name;
    job === undefined ? this.job = 'scallywag' : this.job = job;
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    return 'YAARRR!';
  }

}

module.exports = Pirate;