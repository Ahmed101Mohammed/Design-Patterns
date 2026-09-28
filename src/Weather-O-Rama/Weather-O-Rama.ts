import { CurrentConditions } from "./display/implements/CurrentConditons.js";
import { Forecast } from "./display/implements/Forecast.js";
import { HeatIndex } from "./display/implements/HeatIndex.js";
import { Statistics } from "./display/implements/Statistics.js";
import { Subject } from "./Weather/Subject.js";
import { Weather } from "./Weather/Weather.js"

function main(): void
{
  const weather = new Weather();
  
  const currentConditions = new CurrentConditions(weather);

  const statistics = new Statistics(weather);
  
  const forecast = new Forecast(weather);

  const heatIndex = new HeatIndex(weather);

  weather.setMeasurements(33, 12, true);

  forecast.weather.removeObserver(forecast);

  weather.setMeasurements(21, 10, false);
}

main();