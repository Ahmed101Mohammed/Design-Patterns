export abstract class Beverage {
  private _description: string = "Unknown Beverage";

  private _milk: boolean = false;
  private _chocolate: boolean = false;

  constructor(description: string) 
  {
    this._description = description;
  }

  get description(): string 
  {
    return this._description;
  }

  addMilk(): void 
  {
    this._milk = true;
  }

  addChocolate(): void 
  {
    this._chocolate = true;
  }

  cost(): number
  {
    let total = 0;

    if (this._milk) 
      total += 0.1;

    if (this._chocolate) 
      total += 0.2;

    return total;
  }
}