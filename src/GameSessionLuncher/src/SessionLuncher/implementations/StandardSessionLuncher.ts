import { CasualSession } from "../../Session/implementations/CasualSession.js";
import { RankedSession } from "../../Session/implementations/RankedSession.js";
import { TournamentSession } from "../../Session/implementations/TournamentSession.js";
import { Session } from "../../Session/Session.js";
import { SessionLuncher } from "../SessionLuncher.js";

export class StandardSessionLuncher extends SessionLuncher
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
      default:
        return new CasualSession();
    }
  }
}