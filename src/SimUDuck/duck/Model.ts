import { NoWay } from "../fly/implementation/NoWay.js";
import { Quack } from "../quack/implementation/Quack.js";
import { Duck } from "./Duck.js";

export class Model extends Duck
{
  constructor()
  {
    super(new NoWay(), new Quack())
  }

  display(): void {
    console.log("I'm a model duck :-)")
  }
}