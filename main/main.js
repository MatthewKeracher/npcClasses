class Manager { //Added level of abstraction for all classManagers.
    constructor() {
      this.entities = [];
    }
  
    n(name) {
      const result = this.entities.find(
        ent => ent.name.toUpperCase() === name.toUpperCase()
      );
      return checkForUndefined(result, `entities.n(${name})`);
    }
  
    t(type) {
      const result = this.entities.find(
        ent => ent.type.toUpperCase() === type.toUpperCase()
      );
      return checkForUndefined(result, `entities.t(${type})`);
    }
  
    add(data) { //Character, Location, etc.
      this.entities.push(data);
      return this.entities;
    }
  
    all() {
      return this.entities;
    }
  
    delete(key, value) {
      this.entities = this.entities.filter(ent => ent[key] !== value);
      return this.entities;
    }
  }


  class Entry { //Master Class for all Entry types; ex. NPCs, Locations.
    name = "";
    id = "";
    journal = []; //Journal Class on all Entries.
    color = "rgba(0, 255, 0, 1)";
    text = "";


    constructor() {
      this.name = "Untitled Entry";
      this.id = 0;
      this.journal = [];
      this.color = "rgba(0, 255, 0, 1)";
      this.text = `This is ${this.name}.`
    }

    note(text){

    this.journal.push(text)

    }
  
  }