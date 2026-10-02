import { Beverage } from "../../Beverage.js";
import { Condiment } from "../Condiment.js";

export class Mocha extends Condiment
{
  constructor(beverage: Beverage)
  {
    super(beverage);
    this._description = "Mocha";
  }

  cost(): number
  {
    return 0.2 + super.cost();
  }
}