import { PaymentMethod } from "./PaymentMethod/PaymentMethod.js";

export class Checkout {

  private paymentMethod: PaymentMethod

  constructor(PaymentMethod: PaymentMethod)
  {
    this.paymentMethod = PaymentMethod
  }

  setPaymentMethod(paymentMethod: PaymentMethod): void
  {
    this.paymentMethod = paymentMethod
  }

  pay(amount: number): void
  {
    this.paymentMethod.pay(amount)
  }
}