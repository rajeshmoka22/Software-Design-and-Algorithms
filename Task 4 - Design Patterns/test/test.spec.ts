import DoNotLeaveDecorator from '../src/DoNotLeaveDecorator';
import FragileDecorator from '../src/FragileDecorator';
import ShipmentFactory from '../src/ShipmentFactory';
import State from '../src/State';

let id = 5;
describe('Shipment', () => {
  it('ship should return correct value when ship is called', () => {
    
    let stateObj = new State(5,'1313 Mockingbird Lane, Tulsa, OK ','12292 4th Ave SE, Bellevue, Wa ', '67721', '92021',19,['Fragile', 'donot leave']);
    let instance = new ShipmentFactory(stateObj).getShipment();
    instance = new FragileDecorator(instance);
    instance = new DoNotLeaveDecorator(instance);
    expect(instance.ship()).toEqual(`Shipment with the ID ${id} will be picked up from 12292 4th Ave SE, Bellevue, Wa  92021 and shipped to 1313 Mockingbird Lane, Tulsa, OK  67721
    cost=3.61
    **MARK FRAGILE**
    **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`);

  });
});

describe('ZipCode', () => {

  it('should fail when called with wrong zip', () => {
    expect(function() {
      let stateObj = new State(0,'1313 Mockingbird Lane, Tulsa, OK ','12292 4th Ave SE, Bellevue, Wa ', '00722', '92021',19,['Fragile', 'donot leave']);
    }).toThrow();
  });
  
});

// the above logic should be handled by mock gui... instead I have done it using test cases.
