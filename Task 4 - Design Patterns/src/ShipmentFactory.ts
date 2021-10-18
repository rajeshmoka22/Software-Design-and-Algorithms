import Letter from "./Letter";
import Oversized from "./Oversized";
import Package from "./Package";
import Shipment from "./Shipment";
import State from "./State";
import { getShipmentID, isValidZip } from "./utils";

class ShipmentFactory {
  shipment: Shipment;

  constructor(state: State) {
    if(!isValidZip(state.fromZipCode) && !isValidZip(state.toZipCode)) {
      throw new Error('invalid to or from zip code.');
    }
    state.shipmentId = state.shipmentId ? state.shipmentId : getShipmentID();
    this.shipment = this.createShipmentInstance(state);
  }

  createShipmentInstance(state: State) : Shipment{
    if(state.weight<=15) {
      return new Letter(state);
    } else if(state.weight<=160) {
      return new Package(state);
    } else return new Oversized(state);
  }

  getShipment(): Shipment {
    return this.shipment;
  }

}

export default ShipmentFactory;
