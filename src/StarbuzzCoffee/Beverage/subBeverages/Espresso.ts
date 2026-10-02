import { Beverage } from "../Beverage.js";

export class Espresso extends Beverage
{
  constructor() 
  {
    super();
    this._description = "Espresso Coffee";
  }

  cost(): number 
  {
    return 1.99;
  }
}