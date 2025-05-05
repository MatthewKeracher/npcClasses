
class Character extends Entry {
  type = "character";
  level = 0;
  alignment = "";
  race = "";
  class = "";
  location = {};
  items = [];

  constructor(char) {

    super(char)
    this.name = char?.name || "Anatoly Anonymous";
    this.level = char?.level || 1;
    this.id = char?.id || crypto.randomUUID(); // Generates a UUID
   
    this.race = this.getRace(char?.race || "Human");
  
    this.alignment = char?.alignment || "Neutral Neutral";
    this.text = char?.text || "Write something interesting here.";

    Object.assign(this, this.getClass(char?.class || "Fighter"));

  }

  getClass(className){

    const system = EXCEL_DM.system;
    const classEntry = system.classes.find(classEntry => classEntry.name === className);
    const levelEntry = classEntry.levels[this.level];
    const saveEntry = classEntry.savingThrows[this.level];

    const classState = {

      class: className,
      hitDice: levelEntry.hitDice,
      attackBonus: levelEntry.attackBonus,
      xp: levelEntry.xp,
      savingThrows: saveEntry,

    }
    
    return classState;
  
  }

  getRace(raceName){

    const system = EXCEL_DM.system;
    const raceEntry = system.races[raceName];

    return raceEntry;
  
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





