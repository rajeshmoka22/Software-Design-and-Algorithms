// your code goes here

import Consumable from "./Consumable";

class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number = 0;
  static sliceWeight: number = 5; // assuming slice weight as 5 grams since it is not provided.

  // weight is not passed to pizza
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('Pizza', numberOfSlices, numberOfSlices*Pizza.sliceWeight, spoiled); // calculating weight based on slice count.
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string{
    if(this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;
      if(this.slicesEaten >= this.numberOfSlices) this.setConsumed = true;
      return `You eat a slice of pizza`;
    }
  }
}

export default Pizza;