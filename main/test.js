const locs = new Manager("Locations");
const npcs = new Manager("Characters");

locs.add(
    new Location({
      name: "The Dark Cave",
      description: "A dark and spooky cave.",
    })
  );

locs.add(
new Location({
    name: "The Boat",
    description: "A bobbing boat.",
    type: "Boat"
    })
  );


locs.n("The Dark Cave").addSub(locs.n("The Boat"));

npcs.add(
    new Character({
      name: "Even",
      description: "A brave warrior from the north.",
      alignment: "Chaotic Good",
    })
  );
  
  npcs.add(
    new Character({
      name: "Odd",
    })
  );
  
  npcs.n("Even").increaseLevel;
  
  npcs
    .n("Even")
    .goTo(locs.n("The Dark Cave"));

  // npcs
  //   .n("Even")
  //   .note("Entered Dark Cave", "We arrived just before nightfall...");
  
  
  npcs
    .n("Odd")
    .goTo(locs.n("The Dark Cave"));

  locs
    .n("The Dark Cave")
    .remChar(npcs.n("Odd"));

    locs
    .n("The Dark Cave")
    .note("Note Number 1"); 

    locs
    .n("The Dark Cave")
    .note("Note Number 2"); 



locs.all().forEach((entry) => {
  log(entry)
});


