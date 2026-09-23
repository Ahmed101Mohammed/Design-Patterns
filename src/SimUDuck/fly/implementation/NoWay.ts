import { FlyBehavior } from "../FlyBehavior.js";

export class NoWay implements FlyBehavior
{
  fly(): void 
  {
    console.log("Outch I can't fly :-(")  
  }
}