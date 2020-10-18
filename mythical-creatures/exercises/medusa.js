class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.length <= 2 ? this.statues.push(victim) : this.statues;
    victim.stoned = true;
  }

}

module.exports = Medusa;
