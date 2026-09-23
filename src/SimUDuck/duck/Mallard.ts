import { FlyWithWings } from "../fly/implementation/FlyWithWings.js";
import { Quack } from "../quack/implementation/Quack.js";
import { Duck } from "./Duck.js";

export class Mallard extends Duck
{
  constructor()
  {
    super(new FlyWithWings(), new Quack());
  }

  display(): void 
  {
    console.log("I'm a Mallard Duck :-)")
  }
}