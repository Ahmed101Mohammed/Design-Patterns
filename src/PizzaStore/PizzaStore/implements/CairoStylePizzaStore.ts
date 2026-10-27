import { CairoIngrediantFactory } from "../../IngrediantFactory/implements/CairoIngrediantFactory.js";
import { IngrediantFactory } from "../../IngrediantFactory/IngrediantFactory.js";
import { CheesePizza } from "../../Pizza/implementations/CheesePizza.js";
import { PepperoniPizza } from "../../Pizza/implementations/PepperoniPizza.js";
import { Pizza } from "../../Pizza/Pizza.js";
import { PizzaStore } from "../PizzaStore.js";

export class CairoStylePizzaStore extends PizzaStore
{
  private ingrediantFactory: IngrediantFactory = new CairoIngrediantFactory();
  createPizza(type: string): Pizza 
  {
    switch(type)
    {
      case 'cheese':
        return new CheesePizza(this.ingrediantFactory, "Cairo Cheese Pizza");
      case 'pepperoni':
        return new PepperoniPizza(this.ingrediantFactory, 
          "Cairo Pepperoni Pizza");
      default: 
        return new CheesePizza(this.ingrediantFactory, "Cairo Cheese Pizza");
    }  
  }
}