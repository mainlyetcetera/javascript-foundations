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

  cast() {
    return this.topHat ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE'
  }

}

module.exports = Magician;
