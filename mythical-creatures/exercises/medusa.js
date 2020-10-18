class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;
  }

}

module.exports = Medusa;
