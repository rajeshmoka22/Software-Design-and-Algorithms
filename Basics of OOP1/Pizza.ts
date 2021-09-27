// your code goes here

import Consumable from "./Consumable";

class Pizza extends Consumable {
  private _numberOfSlices: number;
  private _slicesEaten: number = 0;
  static sliceWeight: number = 5; // assuming slice weight as 5 grams since it is not provided.

  // weight is not passed to pizza
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('Pizza', numberOfSlices, numberOfSlices*Pizza.sliceWeight, spoiled); // calculating weight based on slice count.
    this._numberOfSlices = numberOfSlices;
  }

  eat(): string{
    if(this._slicesEaten < this._numberOfSlices) {
      this._slicesEaten++;
      if(this._slicesEaten >= this._numberOfSlices) this.consumed = true;
      return `You eat a slice of pizza`;
    }
  }
}

export default Pizza;
