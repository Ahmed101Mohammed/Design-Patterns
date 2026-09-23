import { QuackBehavior } from "../QuackBehavior.js";

export class Squeak implements QuackBehavior
{
  quack(): void 
  {
    console.log("Squeak ... Squeak")  
  }
}