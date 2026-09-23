import { QuackBehavior } from "../QuackBehavior.js";

export class Quack implements QuackBehavior 
{
  quack(): void {
    console.log("I'm Quacking: Ku Ku");
  }
}