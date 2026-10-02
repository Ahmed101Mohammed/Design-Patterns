import { Beverage } from "../Beverage.js";
import { Size } from "../Size.js";

export class Espresso extends Beverage
{
  protected costs = {
    [Size.TALL]: 1.99,
    [Size.GRAND]: 2.1,
    [Size.VENTI]: 2.2
  }

  constructor() 
  {
    super();
    this._description = "Espresso Coffee";
  }
}