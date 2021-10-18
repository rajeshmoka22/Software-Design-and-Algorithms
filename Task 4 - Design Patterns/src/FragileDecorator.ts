import Shipment from "./Shipment";

class FragileDecorator implements Shipment {
  shipment: Shipment;
  constructor(instance: Shipment){
    this.shipment = instance;
  }

  ship(): string {
    return `${this.shipment.ship()}
    **MARK FRAGILE**`;
  }
}

export default FragileDecorator;
