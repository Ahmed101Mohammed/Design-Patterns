import { FlyBehavior } from "../FlyBehavior.js";

export class RocketPowered implements FlyBehavior 
{
  fly(): void {
    console.log("I'm flying with a rocket! WOW!");
  }
}