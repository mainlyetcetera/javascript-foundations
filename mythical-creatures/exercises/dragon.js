class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.timesEaten = 0;
  }

  eat() {
    this.timesEaten++;
    this.timesEaten >= 3 ? this.hungry = false : this.hungry;
  }

}

module.exports = Dragon;