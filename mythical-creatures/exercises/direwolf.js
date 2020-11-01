class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      this.huntsWhiteWalkers = false;
      stark.safe = true;
    }    
  }

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i].name === stark.name) {
        this.starksToProtect.splice(i, 1);
      }
    }

    stark.safe = false;
  }
}

module.exports = Direwolf;