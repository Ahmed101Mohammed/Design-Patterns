import { Pizza } from "../../Pizza.js";

export class CairoCheesePizza implements Pizza
{
  prepare(): void 
  {
    console.log("Cairo Cheese Pizza in preparation stage...")  
  }

  bake(): void 
  {
    console.log("Cairo Cheese Pizza in baking stage...")  
  }

  cut(): void 
  {
    console.log("Cairo Cheese Pizza in cuting stage...")  
  }
  box(): void 
  {
    console.log("Cairo Cheese Pizza in boxing stage...")    
  }
}