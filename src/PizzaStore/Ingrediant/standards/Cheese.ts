import { Ingrediant } from "../Ingrediant.js";

export class Cheese implements Ingrediant
{
  get name(): string 
  {
    return "Cheese";
  }
}