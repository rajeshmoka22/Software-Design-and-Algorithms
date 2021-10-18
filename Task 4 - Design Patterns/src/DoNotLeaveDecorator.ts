import Shipment from "./Shipment";

class DoNotLeaveDecorator implements Shipment {
  shipment: Shipment;
  constructor(instance: Shipment){
    this.shipment = instance;
  }

  ship(): string {
    return `${this.shipment.ship()}
    **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}

export default DoNotLeaveDecorator;
