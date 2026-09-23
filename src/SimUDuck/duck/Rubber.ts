import { NoWay } from "../fly/implementation/NoWay.js";
import { Squeak } from "../quack/implementation/Squeak.js";
import { Duck } from "./Duck.js";

export class Rubber extends Duck
{
  constructor()
  {
    super(new NoWay(), new Squeak())
  }

  display(): void 
  {
    console.log("I'm a Rubber Duck :-)");  
  }
}