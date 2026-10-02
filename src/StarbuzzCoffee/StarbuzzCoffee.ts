import { Beverage } from "./Beverage/Beverage.js";
import { Mocha } from "./Beverage/Condiment/subCondiments/Mocha.js";
import { Soy } from "./Beverage/Condiment/subCondiments/Soy.js";
import { Whip } from "./Beverage/Condiment/subCondiments/Whip.js";
import { Size } from "./Beverage/Size.js";
import { Espresso } from "./Beverage/subBeverages/Espresso.js";

function main():void
{
  let espresso: Beverage = new Espresso();

  espresso = new Mocha(espresso);

  espresso.size = Size.VENTI;
  
  console.log(`${espresso.description} cost: $${espresso.cost()}`);
}

main();