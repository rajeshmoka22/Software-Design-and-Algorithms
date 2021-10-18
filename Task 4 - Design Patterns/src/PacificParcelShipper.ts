import Shipper from "./Shipper";

class PacificParcelShipper implements Shipper {

  weight: number;
  type: string;
  constructor(weight: number, type: string){
    this.weight = weight;
    this.type = type;
  }

  getCost() : number {
    if(this.type === 'letter') return this.getCostForLetter();
    else if (this.type === 'package') return this.getCostForPackage();
    else return this.getCostForOverSized();
  }

  getCostForLetter(): number {
    return this.weight * 0.51;
  }

  getCostForPackage(): number {
    return this.weight * 0.19;
  }

  getCostForOverSized(): number {
    return this.weight * 0.53;
  }
}

export default PacificParcelShipper;
