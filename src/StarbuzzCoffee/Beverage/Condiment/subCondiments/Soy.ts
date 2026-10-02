import { Beverage } from "../../Beverage.js";
import { Size } from "../../Size.js";
import { Condiment } from "../Condiment.js";

export class Soy extends Condiment
{
  protected costs = {
    [Size.TALL]: 0.1,
    [Size.GRAND]: 0.3,
    [Size.VENTI]: 0.5
  }

  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Soy";
  }
}