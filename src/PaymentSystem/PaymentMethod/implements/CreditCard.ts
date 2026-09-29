import { PaymentMethod } from "../PaymentMethod.js";

export class CreditCard implements PaymentMethod
{
  private cardNumber: string;

  constructor(cardNumber: string)
  {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void
  {
    console.log(`I will pay ${amount} EGP using CreditCard`)
  }
}