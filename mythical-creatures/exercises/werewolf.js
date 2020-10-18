class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  transform() {
    this.human ? (this.human = false, this.wolf = true) : (this.human = true, this.wolf = false);
    this.wolf ? this.hungry = true : this.hungry = false;
  }

}

module.exports = Werewolf;
