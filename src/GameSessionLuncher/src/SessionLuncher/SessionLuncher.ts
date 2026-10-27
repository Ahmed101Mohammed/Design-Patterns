import { Session } from "../Session/Session.js";

export abstract class SessionLuncher
{
  lunch(sessionType: string, participants: string[])
  {
    const session = this.createSession(sessionType);

    session.init();
    session.loadConfig();
    participants.forEach(
      participant => session.register(participant)
    );
    session.start();
    session.finish();
  }

  abstract createSession(sessionType: string): Session;
}