export abstract class Beverage {
  protected _description: string = "Unknown Beverage";

  get description(): string 
  {
    return this._description;
  }

  abstract cost(): number;
}