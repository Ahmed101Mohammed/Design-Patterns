import { Observer } from "../Observer.js";
import { Display } from "../Display.js";
import { Weather } from "../../Weather/Weather.js";

export class Statistics implements Observer, Display
{
  private _temperatures: number[] = [];
  private _humidities: number[] = [];
  private _pressures: boolean[] = [];

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

  update()
  {
    this.temperature = this.weather.temperature;
    this.humidity =  this.weather.humidity;
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
      --- Weather Conditions Average ---
      AVG. Temp: ${this.avgTemperature} C
      AVG. Humidity: ${this.avgHumidity}
      AVG. Pressure: ${this.avgPressure ? 'UP' : 'DOWN'}  
    `)
  }

  get avgTemperature(): number
  {
    const sum = this._temperatures.reduce((sum, temp) => sum + temp, 0);
    const avg = sum / this._temperatures.length

    return avg;
  }

  get avgHumidity(): number
  {
    const sum = this._humidities.reduce((sum, humidity) => sum + humidity, 0);
    const avg = sum / this._humidities.length

    return avg;
  }

  get avgPressure(): boolean
  {
    const sum = this._pressures.reduce(
      (sum, pressure) => sum + (pressure ? 1 : -1), 0
    );

    const avg = sum / this._pressures.length

    return avg > 0 ? true : false;
  }
}