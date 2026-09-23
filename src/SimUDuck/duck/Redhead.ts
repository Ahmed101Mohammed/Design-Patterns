import { FlyWithWings } from "../fly/implementation/FlyWithWings.js";
import { Quack } from "../quack/implementation/Quack.js";
import { Duck } from "./Duck.js";

export class Redhead extends Duck
{
  constructor()
  {
    super(new FlyWithWings(), new Quack())
  }

  display(): void 
  {
    console.log("I'm a Redhead Duck :-)")
  }
}