import Shipper from "./Shipper";

class AirEastShipper implements Shipper {
  
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
    return this.weight * 0.39;
  }

  getCostForPackage(): number {
    return this.weight * 0.25;
  }

  getCostForOverSized(): number {
    return (this.weight * 0.39)+10;
  }
}


export default AirEastShipper;
