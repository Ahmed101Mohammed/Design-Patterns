export class ChocolateBoiler
{
  private empty: boolean = true;
  private boiled: boolean = false;
  private static uniqueInstance: ChocolateBoiler | null = null;

  private constructor() 
  {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler
  {
    if(this.uniqueInstance === null)
    {
      this.uniqueInstance = new ChocolateBoiler();
    }

    return this.uniqueInstance;
  }

  public fill(): void
  {
    if(this.isEmpty())
    {
      this.empty = false;
      this.boiled = false;
      console.log("Chocolate Boiler Filled Successfully.")
    }
  }

  public drain(): void
  {
    if(!this.isEmpty() && this.isBoiled())
    {
      this.empty = true;
      this.boiled = false;
      console.log("Chocolate Boiler Drained Successfully.")
    }
  }

  public boil(): void
  {
    if(!this.isEmpty() && !this.isBoiled())
    {
      this.boiled = true;
      console.log("Chocolate Boiler Boiled Successfully.")
    }
  }

  private isBoiled(): boolean
  {
    return this.boiled;
  }

  private isEmpty(): boolean
  {
    return this.empty;
  }
}