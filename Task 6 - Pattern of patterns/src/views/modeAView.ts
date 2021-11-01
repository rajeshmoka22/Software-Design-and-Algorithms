import { createElement } from "../utils";
import Dollar from "./dollarElement";
import Euro from "./euroElement";
import Rupee from "./rupeeElement";

class ModeA {
  euroElement: HTMLElement;
  dollarElement: HTMLElement;
  rupeeElement: HTMLElement;
  modeAForm: HTMLElement;

  constructor(euro: Euro, dollar: Dollar, rupee: Rupee) {
    this.euroElement = euro.init();
    this.dollarElement = dollar.init();
    this.rupeeElement = rupee.init();
  }

  init() {
    this.modeAForm = createElement('div');
    this.modeAForm.classList.add('converterSection')
    this.modeAForm.append(this.euroElement, this.dollarElement, this.rupeeElement);
    return this.modeAForm;
  }

  show() {
    this.modeAForm.style.display = 'block';
  }

  hide() {
    this.modeAForm.style.display = 'none';
  }
}

export default ModeA;