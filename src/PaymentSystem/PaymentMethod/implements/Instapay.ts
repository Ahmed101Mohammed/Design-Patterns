import { PaymentMethod } from "../PaymentMethod.js";

export class Instapay implements PaymentMethod
{
  private username: string;

  constructor(username: string)
  {
    this.username = username;
  }

  pay(amount: number): void
  {
    console.log(`I will pay ${amount * 1.1} EGP using Instapay`)
  }
}