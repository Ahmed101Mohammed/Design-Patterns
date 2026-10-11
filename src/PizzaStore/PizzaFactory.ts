import { CheesePizza } from "./pizza/implementations/CheesePizza.js";
import { GreekPizza } from "./pizza/implementations/GreekPizza.js";
import { PepperoniPizza } from "./pizza/implementations/PepperoniPizza.js";
import { Pizza } from "./pizza/Pizza.js";

export class PizzaFactory
{
  createPizza(type: string): Pizza
  {
    let pizza: Pizza;

    switch(type)
    {
      case "cheese":
        pizza = new CheesePizza();
        break;
      case "greek":
        pizza = new GreekPizza();
        break;
      case "pepperoni":
        pizza = new PepperoniPizza();
        break;
      default:
        pizza = new CheesePizza();
    }

    return pizza;
  }
}