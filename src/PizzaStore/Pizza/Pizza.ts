import { Ingrediant } from "../Ingrediant/Ingrediant.js";
import { IngrediantFactory } from "../IngrediantFactory/IngrediantFactory.js";

export abstract class Pizza
{
  private _name: string = "";

  constructor(protected ingrediantFactory: IngrediantFactory, name: string)
  {
    this.name = name
  }

  abstract prepare(): void;
  bake(): void 
  {
    console.log(`${this.name} in baking stage...`)  
  }

  cut(): void 
  {
    console.log(`${this.name} in cuting stage...`)  
  }
  box(): void 
  {
    console.log(`${this.name} in boxing stage...`)    
  }
  
  set name(value: string) 
  {
    this._name = value;
  }

  get name(): string 
  {
    return this._name;
  }

  addIngrediant(ingrediant: Ingrediant): void 
  {
    console.log(`${ingrediant.name} added.`)  
  }
}