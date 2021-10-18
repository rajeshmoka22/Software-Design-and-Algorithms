import Shipment from "./Shipment";
import Shipper from "./Shipper";
import ShipperFactory from "./ShipperFactory";
import State from "./State";

class Oversized implements Shipment {
  shipper: Shipper;
  public state: State;
  constructor(state: State){
    this.state = state;
    this.shipper = this.getShipper();
  }

  getShipper() {
    const factory = new ShipperFactory(this.state.fromZipCode, this.state.weight, 'oversized');
    return factory.getShipper();
  }

  ship(): string {
    return `Shipment with the ID ${this.state.shipmentId} will be picked up from ${this.state.fromAddress} ${this.state.fromZipCode} and shipped to ${this.state.toAddress} ${this.state.toZipCode}
    cost=${this.shipper.getCost()}`;
  }
}

export default Oversized;
