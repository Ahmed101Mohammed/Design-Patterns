import { Observer } from "../display/Observer.js";
import { Subject } from "./Subject.js";

export class Weather implements Subject
{
  private _observers: Observer[] = [];

  private _temperature: number = 10;
  private _humidity: number = 1.2;
  private _pressure: boolean = true;

  registerObserver(observer: Observer): void 
  {
    this._observers.push(observer);  
  }

  removeObserver(observer: Observer): void 
  {
    const index = this._observers.indexOf(observer);
    delete this._observers[index];  
  }

  notifyObservers(): void
  {
    const temperature = this.temperature;
    const humidity = this.humidity;
    const pressure = this.pressure;

    this._observers.forEach(
      observer => observer.update(temperature, humidity, pressure)
    );
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

  setMeasurements(temperature: number, humidity: number, pressure: boolean)
  {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.notifyObservers();
  }
}