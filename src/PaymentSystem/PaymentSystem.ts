import { Checkout } from "./Checkout.js";
import { CreditCard } from "./PaymentMethod/implements/CreditCard.js";
import { Instapay } from "./PaymentMethod/implements/Instapay.js";

function main():void
{
  const instaPay = new Instapay('ahmed@instapay');
  const checkout = new Checkout(instaPay);
  checkout.pay(2000);

  const creditCard = new CreditCard('1234-1234-1234-1234');
  checkout.setPaymentMethod(creditCard);
  checkout.pay(2000);

}

main();