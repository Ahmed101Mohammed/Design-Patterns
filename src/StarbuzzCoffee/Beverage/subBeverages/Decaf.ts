import { Beverage } from "../Beverage.js";

export class Decaf extends Beverage
{
  constructor() 
  {
    super();
    this._description = 'Decaf Coffee';
  }

  cost(): number 
  {
    return 1.05;
  }
}