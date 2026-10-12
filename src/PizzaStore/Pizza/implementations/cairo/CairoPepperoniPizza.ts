import { Pizza } from "../../Pizza.js";

export class CairoPepperoniPizza implements Pizza
{
  prepare(): void 
  {
    console.log("Cairo Pepperoni Pizza in preparation stage...")  
  }

  bake(): void 
  {
    console.log("Cairo Pepperoni Pizza in baking stage...")  
  }

  cut(): void 
  {
    console.log("Cairo Pepperoni Pizza in cuting stage...")  
  }
  box(): void 
  {
    console.log("Cairo Pepperoni Pizza in boxing stage...")    
  }
}