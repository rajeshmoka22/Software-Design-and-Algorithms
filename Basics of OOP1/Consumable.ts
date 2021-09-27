// your code goes here

import { Item } from "./Item";

abstract class Consumable extends Item {
  private _consumed: boolean;
  private _spoiled: boolean;
  abstract eat(): string;

  constructor(name: string, value: number, weight: number, spoiled: boolean){
    super(name, value, weight);
    this._spoiled = spoiled;
    this._consumed = false;
  }

  get consumed(): boolean {
    return this._consumed;
  }

  set consumed(consumed: boolean) {
    this._consumed = consumed;
  }

  get spoiled(): boolean {
    return this._spoiled;
  }

  set spoiled(value: boolean) {
    this._spoiled = value;
  }

  use(): string {
    if(!this.spoiled && !this.consumed) {
      return this.eat();
    } else if(this.spoiled) {
      return `${this.eat()}. 
      You feel sick.`
    } else {
      return `There is nothing left of the ${this.name} to consume.`;
    }
  }

  toString(): string {
    return `${this.name} - value: ${this.value}, isConsumed: ${this.consumed}, isSpoiled: ${this.spoiled}`;
  }

}

export default Consumable;
