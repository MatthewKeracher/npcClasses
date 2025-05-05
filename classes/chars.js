
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
    this.id = char?.id || crypto.randomUUID(); // Generates a UUID
    this.name = char?.name || "Anatoly Anonymous";
    this.level = char?.level || 1;
    this.alignment = char?.alignment || "Neutral Neutral";
    this.race = char?.race || "Human";
    this.class = this.getClass(char?.class || "Fighter");
    this.description = char?.description || "Write something interesting here.";

  }

  getClass(className){

    const system = EXCEL_DM.system;
    const classEntry = system.classes.find(classEntry => classEntry.name === className);
    const levelEntry = classEntry.levels[this.level];
    const saveEntry = classEntry.savingThrows[this.level];

    return levelEntry;
  
  }


  addItem(itemType, itemName){

    const items = EXCEL_DM.note.Items[itemType];
    const itemEntry = items.find(itemEntry => itemEntry.name === itemName);

    if(!this.items[itemType]){this.items[itemType] = []};
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





