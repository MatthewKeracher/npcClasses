class Manager { //Added level of abstraction for all classManagers.
    constructor() {
      this.entities = [];
    }
  
    n(name) {
      let result = this.entities.find( 
        ent => ent.name.toUpperCase() === name.toUpperCase()
      );

      return checkForUndefined(result, `entities.n(${name})`);
    }

    search(name) {
      let result = this.entities.filter( //filter first.
        ent => ent.name.toUpperCase().includes(name.toUpperCase())
      );

      if(result.length === 1){result = result[0]}

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

  