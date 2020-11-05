class Spell {
  constructor(name, effect) {
    this.name = name;
    this.description = effect;
    this.executionHistory = [];
  }

  execute(target) {
    let msg = '';
    if (typeof target === 'string') {
      return `Success! The ${target} is levitating.`;
    }

    target.forEach((e, i) => {
      i === target.length - 1 ? msg += `Success! The ${e} is levitating.` : msg += `Success! The ${e} is levitating. `;
      this.executionHistory.push(e); 
    });

    return msg;   
  }

  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;