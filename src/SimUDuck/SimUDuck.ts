import { Decoy } from "./duck/Decoy.js";
import { Mallard } from "./duck/Mallard.js";
import { Model } from "./duck/Model.js";
import { Redhead } from "./duck/Redhead.js";
import { Rubber } from "./duck/Rubber.js";
import { RocketPowered } from "./fly/implementation/RocketPowered.js";

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

  console.log("---------")

  const model = new Model();
  model.display();
  model.performFly();
  model.setFlyBehavior(new RocketPowered());
  model.performFly();
}

main();