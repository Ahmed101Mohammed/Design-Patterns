export class Checkout {

  private instapayUsername: string = ""
  private cardNumber: string = ""

  setInstaPayUsername(instapayUsername: string)
  {
    this.instapayUsername = instapayUsername
  }

  setCardNumber(cardNumber: string)
  {
    this.cardNumber = cardNumber
  }

  pay(method: string, amount: number): void
  {
    switch(method)
    {
      case 'Instapay':
        console.log(`I will pay ${amount} EGP using '${this.instapayUsername}'`)
        break
      case 'CreditCard':
        console.log(
          `I will pay ${amount} EGP using your card number '${this.cardNumber}'`
        )
        break
      default:
        console.log("Bro, don't kidding me :-(")
    }
  }
}