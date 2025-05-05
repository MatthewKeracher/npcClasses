const fighter = {
  name: "Fighter",
  description:
    "<div>Fighters include soldiers, guardsmen, barbarian warriors, and anyone else for whom fighting is a way of life.<br><br>They train in combat, and they generally approach problems head on, weapon drawn.</div><div><br></div><div>Not surprisingly, Fighters are best at fighting of all the classes.<br><br>They are also the hardiest, able to take more punishment than any other class.<br><br>Although they are not skilled in the ways of magic, Fighters can nonetheless use many magic items, including but not limited to magical weapons and armor.</div><div><br></div><div>The Prime Requisite for Fighters is Strength; a character must have a Strength score of 9 or higher to become a Fighter.<br><br>Members of this class may wear any armor and use any weapon.</div>",
  levels: {
    1: { XP: 0, hitDice: "1d8", attackBonus: 1 },
    2: { XP: 2000, hitDice: "2d8", attackBonus: 2 },
    3: { XP: 4000, hitDice: "3d8", attackBonus: 2 },
    4: { XP: 8000, hitDice: "4d8", attackBonus: 3 },
    5: { XP: 16000, hitDice: "5d8", attackBonus: 4 },
    6: { XP: 32000, hitDice: "6d8", attackBonus: 4 },
    7: { XP: 64000, hitDice: "7d8", attackBonus: 5 },
    8: { XP: 120000, hitDice: "8d8", attackBonus: 6 },
    9: { XP: 240000, hitDice: "9d8", attackBonus: 6 },
    10: { XP: 360000, hitDice: "9d8+2", attackBonus: 6 },
    11: { XP: 480000, hitDice: "9d8+4", attackBonus: 7 },
    12: { XP: 600000, hitDice: "9d8+6", attackBonus: 7 },
    13: { XP: 720000, hitDice: "9d8+8", attackBonus: 8 },
    14: { XP: 840000, hitDice: "9d8+10", attackBonus: 8 },
    15: { XP: 960000, hitDice: "9d8+12", attackBonus: 8 },
    16: { XP: 1080000, hitDice: "9d8+14", attackBonus: 9 },
    17: { XP: 1200000, hitDice: "9d8+16", attackBonus: 9 },
    18: { XP: 1320000, hitDice: "9d8+18", attackBonus: 10 },
    19: { XP: 1440000, hitDice: "9d8+20", attackBonus: 10 },
    20: { XP: 1560000, hitDice: "9d8+22", attackBonus: 10 },
  },
};

function getLevelFromXP(xp) {
  const levels = Object.values(fighter.levels);

  for (let i = 0; i < levels.length; i++) {
    if (xp < levels[i].XP) {
      return i;
    }
  }
  return levels.length;
}

class CharacterManager {
  constructor() {
    this.characters = [];
  }

  get all() {
    return this.characters;
  }
  add(character) {
    this.characters.push(character);
  }
  byId(id) {
    return this.characters.find((char) => char.id === id);
  }
  n(name) {
    const result = this.characters.find(
      (char) => char.name.toUpperCase() === name.toUpperCase(),
    );
    return checkForUndefined(result, "chars.n(name)");
  }
}
class Character {
  constructor(char) {
    this.id = char?.id || crypto.randomUUID(); // generates something like this: "f116fb21-79f2-4ec0-8a81-85b5837ea0f3"
    this.name = char?.name || "Anatoly Anonymous";
    this.xp = char?.xp || 0;
    this.alignment = char?.alignment || ["Neutral", "Neutral"];
    this.race = char?.race || "Human";
    this.class = char?.class || "Fighter";
    this.description = char?.description || `Write something interesting here.`;
    this.location = {};
    this.inventory = new Inventory(char?.inventory) || new Inventory();
  }
  get level() {
    return getLevelFromXP(this.xp);
  }
  get hitpoints() {
    return fighter.levels[getLevelFromXP(this.xp)].hitDice;
  }
  get attackBonus() {
    return fighter.levels[getLevelFromXP(this.xp)].attackBonus;
  }
}

class Player extends Character {
  constructor(char) {
    super(char);
    this.stats = {
      strength: char?.stats?.strenght || rollDice(3, 6),
      dexterity: char?.stats?.dexterity || rollDice(3, 6),
      constitution: char?.stats?.constitution || rollDice(3, 6),
      intelligence: char?.stats?.intelligence || rollDice(3, 6),
      wisdom: char?.stats?.wisdom || rollDice(3, 6),
      charisma: char?.stats?.charisma || rollDice(3, 6),
      luck: char?.stats?.luck || rollDice(3, 6),
    };
  }
}

class NewNPC extends Character {
  constructor(char) {
    super(char);
    this.occupation = char?.occupation || "Peasant";
    this.home = char?.home || {};
    this.coins = char?.coins || [];
    this.items = char?.items || [];
  }
}

class Inventory {
  constructor(items = []) {
    this.items = items;
  }
}

const chars = new CharacterManager();
chars.add(new Player({ name: "Arne" }));
chars.add(new Player({ name: "Matthew" }));

L(chars.all);

L(chars.n("Matthew").level);
L(chars.n("Matthew").hitDice);
L(chars.n("Matthew").attackBonus);
