
class Character extends Entry {
  type = "character";
  level = 0;
  alignment = "";
  race = "";
  class = "";
  location = {};
  items = [];

  constructor(char) {

    super(char);

    this.name = char?.name || "Anatoly Anonymous";
    this.level = char?.level || "1";
   
    this.race = char?.race || "Human";
    this.class = char?.class || "Fighter"; 
    
    this.stats = {
      str: char?.stats?.str || rollDice(3, 6),
      dex: char?.stats?.dex || rollDice(3, 6),
      con: char?.stats?.con || rollDice(3, 6),
      int: char?.stats?.int || rollDice(3, 6),
      wis: char?.stats?.wis || rollDice(3, 6),
      cha: char?.stats?.cha || rollDice(3, 6),
      luk: char?.stats?.luk || rollDice(3, 6),
    };

    this.alignment = char?.alignment || "Neutral Neutral";
    this.text = char?.text || "Write something interesting here.";

    this.id = char?.id || crypto.randomUUID(); // Generates a UUID

  }

  get hitPoints() {
    const classEntry = EXCEL_DM.system.classes.find(classEntry => classEntry.name === this.class);
    const hitEntry = classEntry.levels[this.level].hitDice;

    const hitDiceParsed = parseDice(hitEntry);
    const hitDiceRoll = rollDice(hitDiceParsed.numDice, hitDiceParsed.diceSides);
    const conModifier = getModifiers(this.stats.con)

    return hitDiceRoll + conModifier
  }

  get melee(){

    const classEntry = EXCEL_DM.system.classes.find(classEntry => classEntry.name === this.class);
    const attackBonus = classEntry.levels[this.level].attackBonus;
    const strModifier = getModifiers(this.stats.str)

    return rollDice() + attackBonus + strModifier;

  }

  get ranged(){

    const classEntry = EXCEL_DM.system.classes.find(classEntry => classEntry.name === this.class);
    const attackBonus = classEntry.levels[this.level].attackBonus;
    const dexModifier = getModifiers(this.stats.dex)

    return rollDice() + attackBonus + dexModifier;

  }

  get saveThrows() {
    const classEntry = EXCEL_DM.system.classes.find(classEntry => classEntry.name === this.class);
    const saveThrows = classEntry.savingThrows[this.level];
    const modifiers = EXCEL_DM.system.races[this.race];

    const moddedSaveThrows = {};

    for (const save in saveThrows) {
      moddedSaveThrows[save] = parseInt(saveThrows[save])- parseInt(modifiers[save]);
    }

    return moddedSaveThrows;

  }

  get xp() {
    const classEntry = EXCEL_DM.system.classes.find(classEntry => classEntry.name === this.class);
    return classEntry.levels[this.level].XP;
  }
  
 
  addItem(itemType, itemName){

    const items = EXCEL_DM.note.Items[itemType];
    const itemEntry = items.find(itemEntry => itemEntry.name === itemName);

    if(!this.items[itemType]){this.items[itemType] = []};

    if(this.items[itemType].includes(itemEntry)){
      return `${this.name} already has a ${itemName}!`
    }

   
    this.items[itemType].push(itemEntry);
    return this;

  }

  edit(key, value) {
    this[key] = value;
  }

  get increaseLevel() {
    this.level++;
  }

  goTo(location) {
    this.location = location;
    location.addChar(this);
  }

}







