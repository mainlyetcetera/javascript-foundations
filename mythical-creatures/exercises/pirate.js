class Pirate {
  constructor(name, job) {
    this.name = name;
    job === undefined ? this.job = 'scallywag' : this.job = job;
  }
}

module.exports = Pirate;