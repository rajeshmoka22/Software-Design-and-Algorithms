import { createElement } from "../utils";
import Dollar from "./dollarElement";
import Euro from "./euroElement";
import Rupee from "./rupeeElement";

type Currency = Dollar | Rupee;
class ModeB {
  modeBForm: HTMLElement;
  elements: Map<Euro, Currency>

  constructor(map: Map<Euro, Currency>) {
    this.elements = map;
  }

  init() {
    this.modeBForm = createElement('div');
    this.elements.forEach((currency: Currency, euro: Euro) => {
      const element = createElement('div');
      element.classList.add('converterSection')
      element.append(euro.init());
      element.append(currency.init());
      this.modeBForm.append(element);
    })

    return this.modeBForm;
  }

  show() {
    this.modeBForm.style.display = 'block';
  }

  hide() {
    this.modeBForm.style.display = 'none';
  }
}

export default ModeB;
