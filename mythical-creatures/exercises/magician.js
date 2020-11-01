class Magician {
  constructor(magician) {
    magician = magician || {};

    if (magician.topHat === undefined) {
      magician.topHat = true;
    } else {
      magician.topHat;
    }

    this.name = magician.name;
    this.topHat = magician.topHat;
    this.confident = false;
    this.experience = 0;
  }

  incantation(spellName) {
    return `${spellName.toUpperCase()}!`;
  }

  cast() {    
    this.experience++;
    if (this.experience > 2) {
      this.confident = true;
    }

    if (this.topHat) {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confident) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no! Practice more before attempting this trick!';
    }
  }

}


module.exports = Magician;
