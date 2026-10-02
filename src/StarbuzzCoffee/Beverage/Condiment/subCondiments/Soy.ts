import { Beverage } from "../../Beverage.js";
import { Condiment } from "../Condiment.js";

export class Soy extends Condiment
{
  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Soy";
  }

  cost(): number
  {
    return 0.15 + super.cost();
  }
}