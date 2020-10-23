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

  consume(victim) {    
    var hungryMsg;
    !this.hungry ? hungryMsg = 'I couldn\'t possibly eat another human!' : (this.transform(), hungryMsg = 'The dragons are right. Humans DO taste good with ketchup! :P');
    return hungryMsg;
  }

}

module.exports = Werewolf;
