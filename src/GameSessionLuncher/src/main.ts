import { CairoGemsSessionLuncher } from "./SessionLuncher/implementations/CairoGemsSessionLuncer.js";

function main():void
{
  const sessionLuncher = new CairoGemsSessionLuncher();

  sessionLuncher.lunch("custom", ["ahmed", "mohamed", "ali"]);
}

main();