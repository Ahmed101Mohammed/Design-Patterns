import { CasualSession } from "../../Session/implementations/CasualSession.js";
import { CustomSession } from "../../Session/implementations/CustomSession.js";
import { RankedSession } from "../../Session/implementations/RankedSession.js";
import { TournamentSession } from "../../Session/implementations/TournamentSession.js";
import { Session } from "../../Session/Session.js";
import { SessionLuncher } from "../SessionLuncher.js";

export class CairoGemsSessionLuncher extends SessionLuncher
{
  createSession(sessionType: string): Session 
  {
    switch (sessionType) {
      case "casual":
        return new CasualSession();
      case "ranked":
        return new RankedSession();
      case "tournament":
        return new TournamentSession();
      case "custom":
        return new CustomSession();
      default:
        return new CasualSession();
    }
  }
}