import { Beverage } from "../Beverage.js";

export class HouseBlend extends Beverage
{
  constructor()
  {
    super("House Blend Coffee");
  }

  cost(): number 
  {
    return super.cost() + 1;
  }
}