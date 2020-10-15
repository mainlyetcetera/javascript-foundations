class Pirate {
  constructor(name, job) {
    this.name = name;
    job === undefined ? this.job = 'scallywag' : this.job = job;
    this.cursed = false;
  }

  robShip() {
    return 'YAARRR!';
  }

}

module.exports = Pirate;