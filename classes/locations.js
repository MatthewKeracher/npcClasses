 
class Location extends Entry {
  type = "location";
  occupants = [];
  subLocations = [];

    constructor(location) {
      super(location)
      this.name = location?.name || "Unknown Location";
      this.text = location?.text || "A point in space.";
      this.id = "0.0.1.2" // Conforms to Map Location
      this.type = location?.type || "Location";
    }
  
    get occupants() {
      return this.occupants;
    }

    addSub(location){ //Add Location inside this Location
      const alreadySub = this.subLocations.includes(location);
      const isTheirSub = location.subLocations.includes(this);
      
      if(!alreadySub && !isTheirSub){
        this.subLocations.push(location);
        return `${location.name} is now inside ${this.name}!`
      }else if(alreadySub){
        return `${location.name} is already inside ${this.name}!`
      }else if(isTheirSub){
        return `${this.name} is already inside ${location.name}!`
      }

    }

    remSub(location) {
      this.subLocations = this.subLocations.filter((l) => l !== location);
    }

    addChar(occupant) {
      const exists = this.occupants.includes(occupant);
        if(!exists){
            this.occupants.push(occupant);
            occupant.note(`Entered ${this.name}`, `${occupant.name} the ${occupant.race.race} ${occupant.class} went to ${this.name}`)
            return `${occupant.name} is now at ${this.name}.`
        }else{
            return `${occupant.name} is already at ${this.name}.`
        }
    }

    remChar(occupant) {
      this.occupants = this.occupants.filter((o) => o !== occupant);
      occupant.location = {};
    }

  }

  class Dungeon extends Location { 
    text = "A subterranean hive of villany, and possible treasure."
    type = "Dungeon";
    
    constructor(loc) {
      super(loc);
    }
  }


  class Hamlet extends Location {
    type = "hamlet"; 
    families = "74-";
    monthlyIncome = "*";
    marketClass = 4;
    
    constructor(loc) {
      super(loc);
    }
  }

