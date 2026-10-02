import { Beverage } from "../../Beverage.js";
import { Condiment } from "../Condiment.js";

export class SteamedMilk extends Condiment
{
  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Steamed Milk";
  }

  cost(): number
  {
    return 0.1 + super.cost();
  }
}