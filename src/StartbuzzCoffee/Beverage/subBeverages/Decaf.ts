import { Beverage } from "../Beverage.js";

export class Decaf extends Beverage
{
  constructor() 
  {
    super("Decaf Coffee");
  }
  cost(): number 
  {
    return super.cost() + 1.05;
  }
}