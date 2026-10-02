import { Beverage } from "../../Beverage.js";
import { Size } from "../../Size.js";
import { Condiment } from "../Condiment.js";

export class SteamedMilk extends Condiment
{
  protected costs = {
    [Size.TALL]: 0.1,
    [Size.GRAND]: 0.2,
    [Size.VENTI]: 0.3
  }
  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Steamed Milk";
  }
}