import Dollar from "../views/dollarElement";
import Euro from "../views/euroElement";
import ModeB from "../views/modeBView";
import Rupee from "../views/rupeeElement";

class ModeBFactory {
  data: Map<string, number>
  constructor(data?: Map<string, number>){
    this.data = data;
  }

  init() {
    const euro1 = new Euro('modeB', this.createMap('0', 'modeBInput', 'modeB-euro'));
    const rupee = new Rupee('modeB', this.createMap('0', 'modeBInput', 'modeB-rupee'));
    const dollar = new Dollar('modeB', this.createMap('0', 'modeBInput', 'modeB-dollar'));
    const euro2 = new Euro('modeB', this.createMap('0', 'modeAInput', 'modeB-euro'));
    const modeBMap = new Map();
    modeBMap.set(euro1, rupee);
    modeBMap.set(euro2, dollar);
    const modeB = new ModeB(modeBMap).init();
    return modeB;
  }

  createMap(dataValue: string, className: string, dataName: string,): Map<string, string> {
    const map = new Map();
    map.set('value', dataValue || '');
    map.set('class', className);
    map.set('data-name', dataName);
    return map;
  }
}

export default ModeBFactory;