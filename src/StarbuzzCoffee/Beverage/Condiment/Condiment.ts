import { Beverage } from "../Beverage.js"

export abstract class Condiment extends Beverage
{
  protected _beverage: Beverage;

  constructor(beverage: Beverage)
  {
    super();
    this._beverage = beverage;
  }

  cost(): number
  {
    return this._beverage.cost();
  }

  get description(): string
  {
    return this._beverage.description + `, ${this._description}`;
  }
}