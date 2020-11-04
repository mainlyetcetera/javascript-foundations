class Robe {
  constructor() {
    this.pockets = populatePockets() || [];
  }

  addToPocket(item) {
    for (let pocket = 0; pocket < this.pockets.length; pocket++) {
      if (this.pockets[pocket].length === 0) {             
        this.pockets[pocket].push(item);
        return;
      }     
    }    
  }

  retrieve(item) {
    let retrievedItem;
      this.pockets.forEach((e) => {
        e[0] === item ? retrievedItem = e[0] : retrievedItem;
        e.pop();
    });

    return retrievedItem;
  }

  emptyAllPockets() {
    this.pockets.forEach(e => e.pop());
  }

}

let populatePockets = () => {
  let robe = [];
  for (let i = 0; i < 10; i++) {
    robe.push([]);
  }

  return robe;
}

module.exports = Robe;