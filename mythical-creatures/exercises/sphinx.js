class Sphinx {
  constructor(name) {
    this.name = name || null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift();
    }

    this.riddles.push(riddle);
  }

  attemptAnswer(answerAttempt) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answerAttempt) {
        if (this.riddles.length > 1) {
          this.riddles.splice(i, 1);
          i--;
          return `That wasn't that hard, I bet you don't get the next one`;
        } else {
        // if (this.riddles.length === 1) {
          var removed = this.riddles.splice(i, 1);
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${removed[0].answer}"???`
        }
      }
    //   if (this.riddles[i].answer === answerAttempt && this.riddles.length > 1) {
    //     this.riddles.splice(i, 1);
    //     i--;
    //     return `That wasn't that hard, I bet you don't get the next one`;
    //   } else if (this.riddles[i].answer === answerAttempt && this.riddles.length === 1) {
    //     var removed = this.riddles.splice(i, 1);
    //     return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${removed[0].answer}"???`
    //   }
    }

    this.heroesEaten++;
  }

}

module.exports = Sphinx;
