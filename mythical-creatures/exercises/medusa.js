class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.length === 3 ? (this.statues[0].stoned = false, this.statues.shift(), this.statues.push(victim), victim.stoned = true)
      : this.statues.length <= 2 ? (this.statues.push(victim), victim.stoned = true)
      : this.statues    
  }

}

module.exports = Medusa;
