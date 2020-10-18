class Magician {
  constructor(magician) {
    // magician.topHat ? this.topHat = magician.topHat : this.topHat = true;
    !magician || magician.topHat ? this.topHat = true
      : magician.topHat === undefined ? (this.name = magician.name, this.topHat = true)
      : (this.name = magician.name, this.topHat = magician.topHat)
  }

  incantation(spellName) {
    return `${spellName.toUpperCase()}!`;
  }

}

module.exports = Magician;
