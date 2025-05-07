function checkForUndefined(result, string){

    if(result){
    return result
    }else{
    return `Could not do ${string}`
    }
  
  
}

function log(...args) {
    console.log(...args);
  }

   

function rollDice(numDice = 1, diceSides = 20, multiplier = 1) {

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
    }
    return total * multiplier;
}

function parseDice(diceNotation) {
    const diceRegex = /^(\d+)d(\d+)(?:x(\d+))?$/i;
    const match = diceNotation.match(diceRegex);

    if (match) {
        const numDice = parseInt(match[1]);
        const diceSides = parseInt(match[2]);
        const multiplier = match[3] ? parseInt(match[3]) : 1;
        return { numDice, diceSides, multiplier };
    } else {
        throw new Error('Invalid dice notation');
    }
}

function getModifiers(score) {
    const system = EXCEL_DM.system
    let modifier = 0;
  
    for (const entry of system.modifiers) {
      if (score >= entry.range.min && score <= entry.range.max) {
        modifier = entry.bonus;
        break;
      }
    }
  
    return modifier;
  }