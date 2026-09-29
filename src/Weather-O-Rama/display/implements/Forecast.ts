import { Observer } from "../Observer.js";
import { Display } from "../Display.js";
import { Weather } from "../../Weather/Weather.js";

export class Forecast implements Observer, Display
{
  private _temperatures: number[] = [];
  private _humidities: number[] = [];
  private _pressures: boolean[] = [];

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
    this.temperature = this.weather.temperature;
    this.humidity = this.weather.humidity;
    this.pressure = this.weather.pressure;
    this.display();
  }

  set temperature(temperature: number)
  {
    this._temperatures.push(temperature);
  }

  set humidity(humidity: number)
  {
    this._humidities.push(humidity);
  }

  set pressure(pressure: boolean)
  {
    this._pressures.push(pressure);
  }

  display(): void
  {
    console.log(`
      --- Tomoro Weather Conditions ---
      Tomoro Temp: ${this.temperature} C
      Tomoro Humidity: ${this.humidity}
      Tomoro Pressure: ${this.pressure ? 'UP' : 'DOWN'}  
    `)
  }

  get temperature(): number
  {
    return this._temperatures[this._temperatures.length - 1];
  }

  get humidity(): number
  {
    return this._humidities[this._humidities.length - 1];
  }

  get pressure(): boolean
  {
    return this._pressures[this._pressures.length - 1];
  }

}