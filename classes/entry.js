
class Entry { //Master Class for all Entry types; ex. NPCs, Locations.
    name = "";
    id = "";
    notes = []; //note Class on all Entries.
    color = "";
    text = "";


    constructor() {
      this.name = "Untitled Entry";
      this.id = 0;
      this.notes = [];
      this.color = "rgba(0, 255, 0, 1)";
      this.text = `This is ${this.name}.`
    }

    note(name = "Untitled Note", text){
    this.notes.push(new Note({name: name, text: text}))
    }

    removeNote(index) {
    this.notes.splice(index, 1);
    }
  
  }

  class Note {

    name = "";
    id = "";
    color = "";
    text = "";

    constructor(note) {
        this.name = note?.name || "Untitled Entry";
        this.id = 0;
        this.color = note?.color || "rgba(0, 255, 0, 1)";
        this.text = note?.text ||`This is ${this.name}.`
      }

  }