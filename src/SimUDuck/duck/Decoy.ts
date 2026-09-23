import { NoWay } from "../fly/implementation/NoWay.js";
import { Mute } from "../quack/implementation/Mute.js";
import { Squeak } from "../quack/implementation/Squeak.js";
import { Duck } from "./Duck.js";

export class Decoy extends Duck
{
  constructor()
  {
    super(new NoWay(), new Mute())
  }

  display(): void 
  {
    console.log("I'm a Decoy Duck :-)");  
  }
}