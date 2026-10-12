import { CairoStylePizzaStore } from "./PizzaStore/implements/CairoStylePizzaStore.js"

function main():void
{
  const store = new CairoStylePizzaStore();
  store.orderPizza('pepperoni');
}

main()