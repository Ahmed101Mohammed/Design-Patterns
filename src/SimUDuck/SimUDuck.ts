import { Decoy } from "./duck/Decoy.js";
import { Mallard } from "./duck/Mallard.js";
import { Redhead } from "./duck/Redhead.js";
import { Rubber } from "./duck/Rubber.js";

function main():void
{
  const mallard = new Mallard();
  mallard.display();
  mallard.performFly();
  mallard.performQuack();

  console.log("---------")

  const redHead = new Redhead();
  redHead.display();
  redHead.performFly();
  redHead.performQuack();

  console.log("---------")

  const rubber = new Rubber();
  rubber.display();
  rubber.performFly();
  rubber.performQuack();

  console.log("---------")

  const decoy = new Decoy();
  decoy.display();
  decoy.performFly();
  decoy.performQuack();
}

main();