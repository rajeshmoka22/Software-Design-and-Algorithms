import Shipper from "./Shipper";

class ChicagoSprintShipper implements Shipper {

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
    return this.weight * 0.42;
  }

  getCostForPackage(): number {
    return this.weight * 0.20;
  }

  getCostForOverSized(): number {
    return this.weight * 0.42;
  }
}

export default ChicagoSprintShipper;
