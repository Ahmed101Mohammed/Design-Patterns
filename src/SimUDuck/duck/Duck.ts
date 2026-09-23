import { FlyBehavior } from "../fly/FlyBehavior.js"
import { QuackBehavior } from "../quack/QuackBehavior.js"

export abstract class Duck
{
  private flyBehavior: FlyBehavior
  private quackBehavior: QuackBehavior

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior)
  {
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }

  swim():void
  {
    console.log("I'm swimming...")
  }

  display():void
  {}

  performQuack():void
  {
    this.quackBehavior.quack()
  }

  performFly():void
  {
    this.flyBehavior.fly()
  }
}