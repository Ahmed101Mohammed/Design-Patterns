import { FlyBehavior } from "../FlyBehavior.js";

export class FlyWithWings implements FlyBehavior
{
  fly(): void 
  {
    console.log("I'm now flying with wings ... tsh tsh :-)")
  }
}