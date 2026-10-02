import { Beverage } from "../../Beverage.js";
import { Condiment } from "../Condiment.js";

export class Whip extends Condiment
{
  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Whip";
  }

  cost(): number
  {
    return 0.1 + super.cost();
  }
}