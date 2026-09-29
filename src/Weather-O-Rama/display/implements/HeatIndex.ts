import { Weather } from "../../Weather/Weather.js";
import { Display } from "../Display.js";
import { Observer } from "../Observer.js";

export class HeatIndex implements Observer, Display
{
  private _temprature: number = 0;
  private _humedity: number = 0;

  private _weather: Weather = new Weather();
  
  constructor(weather: Weather)
  {
    this.weather = weather;
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

  update(): void 
  {
    this.temprature = this.weather.temperature;
    this.humedity = this.weather.humidity;

    this.display();
  }

  set temprature(temprature: number)
  {
    this._temprature = temprature;
  }

  set humedity(humedity: number)
  {
    this._humedity = humedity;
  }

  display(): void 
  {
    console.log(`
      --- Heat Index --- 
      Heat Index: ${this.heatIndex} 
    `)  
  }

  get heatIndex()
  {
    const heatIndex = 16.923 + 1.85212 * 10 ** -1 * this.temprature + 5.37941 * 
      this.humedity - 1.00254 * 10 ** -1 * this.temprature * this.humedity + 
      9.41695 * 10 ** -3 * this.temprature ** 2 + 7.28898 * 10 ** -3 * 
      this.humedity ** 2 + 3.45372 * 10 ** -4 * this.temprature ** 2 * 
      this.humedity - 8.14971 * 10 ** -4 * this.temprature * this.humedity ** 2 
      + 1.02102 * 10 ** -5 * this.temprature ** 2 * this.humedity ** 2 - 3.8646 
      * 10 ** -5 * this.temprature ** 3 + 2.91583 * 10 ** -5 * this.humedity ** 
      3 + 1.42721 * 10 ** -6 * this.temprature ** 3 * this.humedity + 1.97483 * 
      10 ** -7 * this.temprature * this.humedity ** 3 - 2.18429 * 10 ** -8 * 
      this.temprature ** 3 * this.humedity ** 2 + 8.43296 * 10 ** -10 * 
      this.temprature ** 2 * this.humedity ** 3 - 4.81975 * 10 ** -11 * 
      this.temprature ** 3 * this.humedity ** 3

    return heatIndex;
  }

  get temprature(): number
  {
    return this._temprature;
  }

  get humedity(): number
  {
    return this._humedity;
  }
}