import { Observer } from "../Observer.js";
import { Display } from "../Display.js";
import { Weather } from "../../Weather/Weather.js";

export class CurrentConditions implements Observer, Display
{
  private _weather: Weather

  constructor(weather: Weather)
  {
    this._weather = weather;
    this.weather.registerObserver(this);
  }

  set weather(weather: Weather)
  {
    this._weather = weather;
  }

  get weather()
  {
    return this._weather;
  }

  update()
  {
    this.display();
  }

  display(): void
  {
    const temprature = this.weather.temperature;
    const humidity = this.weather.humidity;
    const pressure = this.weather.pressure;

    console.log(`
      --- Current Conditions ---
      Temp: ${temprature} C
      Humidity: ${humidity}
      Pressure: ${pressure ? 'UP' : 'DOWN'}  
    `)
  }

}