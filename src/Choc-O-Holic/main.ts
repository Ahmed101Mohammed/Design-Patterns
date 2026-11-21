import { ChocolateBoiler } from "./ChocolateBoiler.js";

function main():void
{
  const boiler = ChocolateBoiler.getInstance();
  const boiler1 = ChocolateBoiler.getInstance();

  boiler1.fill();
  boiler.boil();
  boiler1.boil();
  boiler.fill();
}

main();