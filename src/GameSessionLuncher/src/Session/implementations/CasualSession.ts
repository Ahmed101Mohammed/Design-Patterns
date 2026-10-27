import { Session } from "../Session.js";

export class CasualSession implements Session
{
  init(): void {
    console.log("CasualSession initilized...");
  }

  loadConfig(): void {
    console.log("CasualSession config loaded...");
  }

  register(name: string): void {
    console.log(`The player ${name} registered in CasualSession...`);
  }

  start(): void {
    console.log("CasualSession started...");
  }
  
  finish(): void {
    console.log("CasualSession finished...");
  }
}