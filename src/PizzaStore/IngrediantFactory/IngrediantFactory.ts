import { Cheese } from "../Ingrediant/standards/Cheese.js"
import { Sauce } from "../Ingrediant/standards/Sauce.js"

export interface IngrediantFactory 
{
  createSauce(): Sauce
  createCheese(): Cheese
}