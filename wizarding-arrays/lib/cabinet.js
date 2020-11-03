class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    return this.potions.length === 0 ? true : false;
  }

  add(potion) {
    Array.isArray(potion) ? potion.forEach((e) => this.potions.push(e)) : this.potions.push(potion);
  }

  takeFirstPotion() {
    return this.potions.shift();
  }

  takePotionWithName(potionName) {
    let filtered = this.potions.filter((e, i) => {
      e.name === potionName ? this.potions.splice(i, 1) : e;
      return e.name === potionName;
    });
 
    console.log("filtered", filtered);   
    return filtered[0];
   }

  count(potionName) {
    return this.potions.reduce((count, element) => {       
      element.name === potionName ? count++ : count;
      return count;
    }, 0);
   }
}

module.exports = Cabinet;