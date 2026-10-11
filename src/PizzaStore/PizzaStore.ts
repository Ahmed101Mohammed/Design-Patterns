import { Pizza } from "./pizza/Pizza.js";
import { PizzaFactory } from "./PizzaFactory.js";


class PizzaStore
{
  private factory: PizzaFactory;

  constructor(factory: PizzaFactory)
  {
    this.factory = factory;
  }

  orderPizza(type: string): Pizza
  {
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}


function main():void
{
  const factory = new PizzaFactory();

  const store = new PizzaStore(factory);

  store.orderPizza('greek');
}

main()