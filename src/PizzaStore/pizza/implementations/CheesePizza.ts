import { Pizza } from "../Pizza.js";

export class CheesePizza implements Pizza
{
  prepare(): void 
  {
    console.log("Cheese Pizza in preparation stage...")  
  }

  bake(): void 
  {
    console.log("Cheese Pizza in baking stage...")  
  }

  cut(): void 
  {
    console.log("Cheese Pizza in cuting stage...")  
  }
  box(): void 
  {
    console.log("Cheese Pizza in boxing stage...")    
  }
}