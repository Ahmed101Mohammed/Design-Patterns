import { Cheese } from "../../standards/Cheese.js";

export class CairoCheese extends Cheese
{
  get name(): string 
  {
    return `Cairo ${super.name}`
  }
}