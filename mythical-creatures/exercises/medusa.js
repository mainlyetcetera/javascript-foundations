class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.length === 3 ? (this.statues[0].stoned = false, this.statues.shift(), this.statues.push(victim), victim.stoned = true)
      : this.statues.length <= 2 ? (this.statues.push(victim), victim.stoned = true)
      : this.statues
    // this.statues.push(victim) : this.statues;
    // victim.stoned = true;
  }

}

module.exports = Medusa;
