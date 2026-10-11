import { Pizza } from "../Pizza.js";

export class GreekPizza implements Pizza
{
  prepare(): void 
  {
    console.log("Greek Pizza in preparation stage...")  
  }

  bake(): void 
  {
    console.log("Greek Pizza in baking stage...")  
  }

  cut(): void 
  {
    console.log("Greek Pizza in cuting stage...")  
  }
  box(): void 
  {
    console.log("Greek Pizza in boxing stage...")    
  }
}