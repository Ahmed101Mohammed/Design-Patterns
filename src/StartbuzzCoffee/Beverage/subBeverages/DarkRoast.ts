import { Beverage } from "../Beverage.js";

export class DarkRoast extends Beverage
{
  constructor() 
  {
    super("Dark Roast Coffee");
  }

  cost(): number 
  {
    return super.cost() + 0.05;
  }
}