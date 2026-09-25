import { Checkout } from "./Checkout.js";

function main():void
{
  const checkout = new Checkout()
  
  checkout.setCardNumber("8888 33333 2222 1110")
  checkout.pay('CreditCard', 1000)

  console.log("--------------------")

  checkout.setInstaPayUsername("ali@instapay")
  checkout.pay('Instapay', 2000)

}

main();