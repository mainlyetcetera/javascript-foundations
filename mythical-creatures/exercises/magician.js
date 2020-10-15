class Magician {
  constructor(magician) {
    !magician ? this.topHat = true
      : magician.topHat === undefined ? (this.name = magician.name, this.topHat = true)
      : (this.name = magician.name, this.topHat = magician.topHat)
  }
}

module.exports = Magician;