import { Beverage } from "../Beverage.js";
import { Size } from "../Size.js";

export class HouseBlend extends Beverage
{
  protected costs = {
    [Size.TALL]: 0.89,
    [Size.GRAND]: 1,
    [Size.VENTI]: 1.1
  }

  constructor()
  {
    super();
    this._description = "House Blend Coffee";
  }
}