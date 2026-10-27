import { Session } from "../Session.js";

export class CustomSession implements Session
{
  init(): void {
    console.log("CustomSession initilized...");
  }

  loadConfig(): void {
    console.log("CustomSession config loaded...");
  }

  register(name: string): void {
    console.log(`The player ${name} registered in CustomSession...`);
  }

  start(): void {
    console.log("CustomSession started...");
  }
  
  finish(): void {
    console.log("CustomSession finished...");
  }
}