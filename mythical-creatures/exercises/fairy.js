class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses : ['Iris'] };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {    
    flowers.forEach(element => this.clothes.dresses.push(element));
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    this.disposition === 'Vengeful' ? (this.humanWards.push(infant), infant.disposition = 'Malicious') : infant;
    this.humanWards.length === 3 ? this.disposition = 'Good natured' : this.disposition;
    return infant;
  }

}

module.exports = Fairy;
