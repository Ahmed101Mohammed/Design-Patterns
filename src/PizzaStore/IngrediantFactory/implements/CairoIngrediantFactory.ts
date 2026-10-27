import { CairoCheese } from "../../Ingrediant/implementations/CairoIngrediants/CairoCheese.js";
import { CairoSauce } from "../../Ingrediant/implementations/CairoIngrediants/CairoSauce.js";
import { Cheese } from "../../Ingrediant/standards/Cheese.js";
import { Sauce } from "../../Ingrediant/standards/Sauce.js";
import { IngrediantFactory } from "../IngrediantFactory.js";

export class CairoIngrediantFactory implements IngrediantFactory
{
  createSauce(): Sauce 
  {
    return new CairoSauce()
  }

  createCheese(): Cheese 
  {
    return new CairoCheese()
  }
}