import AirEastShipper from "./AirEastShipper";
import ChicagoSprintShipper from "./ChicagoSprintShipper";
import PacificParcelShipper from "./PacificParcelShipper";
import Shipper from "./Shipper";

class ShipperFactory {

  zip: string;
  weight: number;
  type: string;

  constructor(zip: string, weight: number, type: string){
    this.weight = weight;
    this.zip = zip;
    this.type = type;
  }

  getShipper(): Shipper{
    const firstChar = this.zip[0];

    if(firstChar >= '1' && firstChar<= '3') {
      return new AirEastShipper(this.weight, this.type);
    } else if (firstChar<= '6') {
      return new ChicagoSprintShipper(this.weight, this.type);
    } else {
      return new PacificParcelShipper(this.weight, this.type);
    }
  }
}

export default ShipperFactory;
