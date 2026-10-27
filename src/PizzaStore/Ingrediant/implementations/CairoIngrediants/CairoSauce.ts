import { Sauce } from "../../standards/Sauce.js";

export class CairoSauce extends Sauce
{
  get name(): string 
  {
    return `Cairo ${super.name}`;
  }
}