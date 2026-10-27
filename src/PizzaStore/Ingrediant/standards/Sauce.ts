import { Ingrediant } from "../Ingrediant.js";

export class Sauce implements Ingrediant
{
  get name(): string 
  {
    return "Sauce";
  }
}