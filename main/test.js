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
      text: "A small place with small-minded people.",
    })
  );

loc.add(
new Tavern({
    name: "Wicked Wench Inn",
    text: "The only Inn for miles around.",
    })
  );


loc.n("Hommlet").addSub(loc.n("Wicked Wench Inn"));

npc.add(
    new Character({
      name: "Greybeard",
      class: "Mage",
      level: 2,
      text: "An old man who doesn't remember.",
      alignment: "Probably not good.",
      race:"Halfling"
    })
  );
  
  npc.add(
    new Character({
      name: "Bravuro",
      level: 20,
    })
  );
  
  npc.n("Greybeard").increaseLevel;

  
  npc
    .n("Greybeard")
    .goTo(loc.t("Tavern"));

   
  npc
    .n("Bravuro")
    .goTo(loc.n("Wicked Wench Inn"));

  // loc
  //   .n("Hommlet")
  //   .remChar(npc.n("Bravuro"));

    loc
    .n("Hommlet")
    .note("Note Number 1"); 

    loc
    .n("Hommlet")
    .note("Note Number 2"); 



loc.all().forEach((entry) => {
  log(entry)
});

npc.all().forEach((entry) => {
  log(`Name: ${entry.name}`,`Level: ${entry.level}`, entry.items)
});


