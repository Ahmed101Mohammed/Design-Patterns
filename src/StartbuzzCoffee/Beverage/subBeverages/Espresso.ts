import { Beverage } from "../Beverage.js";

export class Espresso extends Beverage
{
  constructor() 
  {
    super("Espresso Coffee");
  }

  cost(): number 
  {
    return super.cost() + 1.99;
  }
}