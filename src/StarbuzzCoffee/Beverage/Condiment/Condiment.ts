import { Beverage } from "../Beverage.js"
import { Size } from "../Size.js";

export abstract class Condiment extends Beverage
{
  protected _beverage: Beverage;

  constructor(beverage: Beverage)
  {
    super();
    this._beverage = beverage;
    this.size = beverage.size;
  }

  cost(): number
  {
    return this._beverage.cost() + this.costs[this.size];
  }

  get description(): string
  {
    return this._beverage.description + `, ${this._description}`;
  }

  set size(size: Size) 
  {
    this._size = size;
    this._beverage.size = size;  
  }
  
  get size(): Size
  {
    return this._size;
  }
}