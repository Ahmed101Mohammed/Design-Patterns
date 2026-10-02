import { Mocha } from "./Beverage/Condiment/subCondiments/Mocha.js";
import { Soy } from "./Beverage/Condiment/subCondiments/Soy.js";
import { Whip } from "./Beverage/Condiment/subCondiments/Whip.js";
import { Espresso } from "./Beverage/subBeverages/Espresso.js";

function main():void
{
  let espresso = new Espresso();
  
  espresso = new Mocha(espresso);
  espresso = new Mocha(espresso);
  espresso = new Soy(espresso);
  espresso = new Whip(espresso);

  console.log(`${espresso.description} cost: $${espresso.cost()}`);
}

main();