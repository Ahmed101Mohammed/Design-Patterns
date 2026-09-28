import { Observer } from "../Observer.js";
import { Display } from "../Display.js";
import { Subject } from "../../Weather/Subject.js";

export class Forecast implements Observer, Display
{
  private _temperatures: number[] = [];
  private _humidities: number[] = [];
  private _pressures: boolean[] = [];

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