import { Beverage } from "../../Beverage.js";
import { Size } from "../../Size.js";
import { Condiment } from "../Condiment.js";

export class Mocha extends Condiment
{
  protected costs = {
    [Size.TALL]: 0.2,
    [Size.GRAND]: 0.4,
    [Size.VENTI]: 0.6
  }

  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Mocha";
  }
}