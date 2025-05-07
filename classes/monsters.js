class Monster extends Entry{
    type = "monster"
    armourClass = ""
    damage = ""
    hit = ""
    morale = ""
    move = ""
    appearing =""
    attacks = ""
    saveAs = ""
    loot = ""
    xp = 0
  
    constructor(monster){
  
      super(monster)
      this.type = "monster"
      this.name = this.reformatName(monster.name);
      this.level = this.reformatLevel(monster.savingThrows);
      this.text = monster.description;

      //Combat
      this.armourClass = monster.armourClass;
      this.attacks = monster.attacks;
      this.damage = monster.damage;
      this.hit = monster.hit;
      this.morale = monster.morale;
      this.move = monster.move;
      this.appearing = this.reformatAppearing(monster.appearing);
      this.saveAs = monster.savingThrows;

      //Rewards
      this.loot = monster.treasure;
      this.xp = monster.xp;
  
    }

 

     reformatLevel(saveAs){
      
      const [monClass, monLevel] = saveAs.split(':').map(s => s.trim());
      return monLevel;

     }

     reformatName(name) {
        const cleaned = name.replace(/[\(\)\*]/g, '').trim();
        const [last, first] = cleaned.split(',').map(s => s.trim());
        if (!first || !last) return cleaned;
        return `${first} ${last}`;
      }

      reformatAppearing(app) {
      
        let result = { Reg: null, Wild: null, Lair: null };
        
        app.split(",").map(s => s.trim()).forEach(part => {
          if (/^wild/i.test(part)) {
            result.Wild = part.replace(/^wild\s*/i, '').trim();
          } else if (/^lair/i.test(part)) {
            result.Lair = part.replace(/^lair\s*/i, '').trim();
          } else if (part) {
            result.Reg = part;
          }
        });
      
        return result;

      }
  
  }