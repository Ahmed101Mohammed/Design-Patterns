import { Pizza } from "../Pizza.js";

export class PepperoniPizza implements Pizza
{
  prepare(): void 
  {
    console.log("Pepperoni Pizza in preparation stage...")  
  }

  bake(): void 
  {
    console.log("Pepperoni Pizza in baking stage...")  
  }

  cut(): void 
  {
    console.log("Pepperoni Pizza in cuting stage...")  
  }
  box(): void 
  {
    console.log("Pepperoni Pizza in boxing stage...")    
  }
}