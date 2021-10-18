import Shipment from "./Shipment";

class ReturnReceiptDecortaor implements Shipment {
  shipment: Shipment;
  constructor(instance: Shipment){
    this.shipment = instance;
  }

  ship(): string {
    return `${this.shipment.ship()}
    **MARK RETURN RECEIPT REQUESTED**`;
  }
}

export default ReturnReceiptDecortaor;
