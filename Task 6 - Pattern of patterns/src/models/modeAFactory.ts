import Dollar from "../views/dollarElement";
import Euro from "../views/euroElement";
import ModeA from "../views/modeAView";
import Rupee from "../views/rupeeElement";

class ModeAFactory {
  data: Map<string, number>
  constructor(data?: Map<string, number>){
    this.data = data;
  }

  init() {
    const euro = new Euro('modeA', this.createMap('0', 'modeAInput', 'modeA-euro'));
    const rupee = new Rupee('modeA', this.createMap('0', 'modeAInput', 'modeA-rupee'));
    const dollar = new Dollar('modeA', this.createMap('0', 'modeAInput', 'modeA-dollar'));
    const modeA = new ModeA(euro, dollar, rupee).init();
    return modeA;
  }

  createMap(dataValue: string, className: string, dataName: string): Map<string, string> {
    const map = new Map();
    map.set('value', dataValue || '');
    map.set('class', className);
    map.set('data-name', dataName);
    return map;
  }
}

export default ModeAFactory;