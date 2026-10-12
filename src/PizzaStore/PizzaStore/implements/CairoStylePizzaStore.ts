import { CairoCheesePizza } from "../../Pizza/implementations/cairo/CairoCheesePizza.js";
import { CairoPepperoniPizza } from "../../Pizza/implementations/cairo/CairoPepperoniPizza.js";
import { Pizza } from "../../Pizza/Pizza.js";
import { PizzaStore } from "../PizzaStore.js";

export class CairoStylePizzaStore extends PizzaStore
{
  createPizza(type: string): Pizza 
  {
    switch(type)
    {
      case 'cheese':
        return new CairoCheesePizza()
      case 'pepperoni':
        return new CairoPepperoniPizza()
      default: 
        return new CairoCheesePizza()
    }  
  }
}