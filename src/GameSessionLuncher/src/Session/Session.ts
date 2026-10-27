export interface Session 
{
  init(): void;
  loadConfig(): void;
  register(name: string): void;
  start(): void;
  finish(): void;
}