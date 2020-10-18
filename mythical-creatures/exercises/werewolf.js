class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
  }

  transform() {
    this.human ? (this.human = false, this.wolf = true) : (this.human = true, this.wolf = false);    
  }

}

module.exports = Werewolf;
