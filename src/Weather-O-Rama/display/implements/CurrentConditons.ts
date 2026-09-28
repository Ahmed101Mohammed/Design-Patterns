import { Observer } from "../Observer.js";
import { Display } from "../Display.js";
import { Subject } from "../../Weather/Subject.js";

export class CurrentConditions implements Observer, Display
{
  private _temperature: number = 10;
  private _humidity: number = 1.2;
  private _pressure: boolean = true;

  private _weather: Subject

  constructor(weather: Subject)
  {
    this._weather = weather;
    this.weather.registerObserver(this);
  }

  set weather(weather: Subject)
  {
    this._weather = weather;
  }

  get weather()
  {
    return this._weather;
  }

  update(temperature: number, humidity: number, pressure: boolean)
  {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  set temperature(temperature: number)
  {
    this._temperature = temperature;
  }

  set humidity(humidity: number)
  {
    this._humidity = humidity;
  }

  set pressure(pressure: boolean)
  {
    this._pressure = pressure;
  }

  display(): void
  {
    console.log(`
      --- Current Conditions ---
      Temp: ${this.temperature} C
      Humidity: ${this.humidity}
      Pressure: ${this.pressure ? 'UP' : 'DOWN'}  
    `)
  }

  get temperature(): number
  {
    return this._temperature;
  }

  get humidity(): number
  {
    return this._humidity;
  }

  get pressure(): boolean
  {
    return this._pressure;
  }

}