const loc = new Manager("Locations");
const npc = new Manager("Characters");
const mon = new Manager("Monsters");


EXCEL_DM.system.monsters.forEach(entry => {

mon.add(

  new Monster(entry)

)

  
})



loc.add(
    new Hamlet({
      name: "Hommlet",
      description: "A small place with small-minded people.",
    })
  );

loc.add(
new Tavern({
    name: "Wicked Wench Inn",
    description: "The only Inn for miles around.",
    type: "Boat"
    })
  );


loc.n("Hommlet").addSub(loc.n("Wicked Wench Inn"));

npc.add(
    new Character({
      name: "Even",
      class: "Cleric",
      level: 7,
      description: "A brave warrior from the north.",
      alignment: "Chaotic Good",
      race:"Halfling"
    })
  );
  
  npc.add(
    new Character({
      name: "Odd",
    })
  );

  npc.add(
    new Character({
      name: "Even",
    })
  );
  
  npc.n("Even").increaseLevel;

  
  npc
    .n("Even")
    .goTo(loc.t("Tavern"));

   
  npc
    .n("Odd")
    .goTo(loc.n("Wicked Wench Inn"));

  // loc
  //   .n("Hommlet")
  //   .remChar(npc.n("Odd"));

    loc
    .n("Hommlet")
    .note("Note Number 1"); 

    loc
    .n("Hommlet")
    .note("Note Number 2"); 



loc.all().forEach((entry) => {
  log(entry)
});


