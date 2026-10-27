import { IngrediantFactory } from "../../IngrediantFactory/IngrediantFactory.js";
import { Pizza } from "../Pizza.js";

export class PepperoniPizza extends Pizza
{
  constructor(protected ingrediantFactory: IngrediantFactory, name: string)
  {
    super(ingrediantFactory, name);
  }

  prepare(): void 
  {
    console.log(`${this.name} in preparation stage...`)
    
    this.addIngrediant(this.ingrediantFactory.createSauce())
  }
}