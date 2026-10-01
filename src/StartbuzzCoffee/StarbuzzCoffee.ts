import { Espresso } from "./Beverage/subBeverages/Espresso.js";

function main():void
{
  const espresso = new Espresso();
  
  console.log(espresso.description + " $" + espresso.cost());
  
  espresso.addChocolate();
  console.log(espresso.description + ' with Chocolate' + " $" + espresso.cost());

  espresso.addMilk();
  console.log(espresso.description + ' with Milk & Chocolate' + " $" + espresso.cost());
}

main();