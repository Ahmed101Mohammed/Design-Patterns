import { Session } from "../Session.js";

export class RankedSession implements Session
{
  init(): void
  {
    console.log("RankedSession initilized...");
  }

  loadConfig(): void
  {
    console.log("RankedSession config loaded...");
  }

  register(name: string): void
  {
    console.log(`The player ${name} registered in RankedSession...`);
  }

  start(): void
  {
    console.log("RankedSession started...");
  }

  finish(): void
  {
    console.log("RankedSession finished...");
  }
}