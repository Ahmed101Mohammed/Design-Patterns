import { Session } from "../Session.js";

export class TournamentSession implements Session
{
  init(): void 
  {
    console.log("TournamentSession initilized...");
  }

  loadConfig(): void 
  {
    console.log("TournamentSession config loaded...");
  }

  register(name: string): void 
  {
    console.log(`The player ${name} registered in TournamentSession...`);
  }

  start(): void 
  {
    console.log("TournamentSession started...");
  }

  finish(): void 
  {
    console.log("TournamentSession finished...");
  }
}