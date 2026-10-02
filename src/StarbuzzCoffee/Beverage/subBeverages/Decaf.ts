import { Beverage } from "../Beverage.js";
import { Size } from "../Size.js";

export class Decaf extends Beverage
{
  protected costs = {
    [Size.TALL]: 1.05,
    [Size.GRAND]: 1.15,
    [Size.VENTI]: 1.25
  }

  constructor() 
  {
    super();
    this._description = 'Decaf Coffee';
  }
}