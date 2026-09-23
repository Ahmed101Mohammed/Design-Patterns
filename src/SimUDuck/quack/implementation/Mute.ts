import { QuackBehavior } from "../QuackBehavior.js";

export class Mute implements QuackBehavior
{
  quack(): void 
  {
    console.log("...");  
  }
}