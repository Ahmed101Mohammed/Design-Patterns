import { Size } from "./Size.js";

type TCosts = {
  [Size.TALL]: number,
  [Size.GRAND]: number,
  [Size.VENTI]: number
}

export abstract class Beverage {
  protected _description: string = "Unknown Beverage";
  protected _size: Size = Size.TALL;
  protected costs: TCosts = {
    [Size.TALL]: 0,
    [Size.GRAND]: 0,
    [Size.VENTI]: 0
  }

  get description(): string 
  {
    return this._description;
  }

  get size(): Size
  {
    return this._size;
  }

  set size(size: Size)
  {
    this._size = size;
  }

  cost(): number
  {
    return this.costs[this.size];
  }
}