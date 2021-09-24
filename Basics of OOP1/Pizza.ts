// your code goes here

import Consumable from "./Consumable";

class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number = 0;

  // weight is not passed to pizza
  constructor(numberOfSlices: number, spoiled: boolean) {
    super('Pizza', numberOfSlices, 0, spoiled);
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