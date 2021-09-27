// your code goes here

import { Item } from "./Item";

abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;
  abstract eat(): string;

  constructor(name: string, value: number, weight: number, spoiled: boolean){
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  get isConsumed(): boolean {
    return this.consumed;
  }

  set setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  get isSpoiled(): boolean {
    return this.spoiled;
  }

  set isSpoiled(value: boolean) {
    this.spoiled = value;
  }

  use(): string {
    if(!this.isSpoiled && !this.isConsumed) {
      return this.eat();
    } else if(this.isSpoiled) {
      return `${this.eat()}. 
      You feel sick.`
    } else {
      return `There is nothing left of the ${this.getName} to consume.`;
    }
  }

  toString(): string {
    return `${this.getName} - value: ${this.getValue}, isConsumed: ${this.isConsumed}, isSpoiled: ${this.isSpoiled}`;
  }

}

export default Consumable;