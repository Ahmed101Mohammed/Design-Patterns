import { Beverage } from "../Beverage.js";
import { Size } from "../Size.js";

export class DarkRoast extends Beverage
{
  protected costs = {
    [Size.TALL]: 0.99,
    [Size.GRAND]: 1.1,
    [Size.VENTI]: 1.2
  }

  constructor() 
  {
    super();
    this._description = 'Dark Roast Coffee';
  }
}