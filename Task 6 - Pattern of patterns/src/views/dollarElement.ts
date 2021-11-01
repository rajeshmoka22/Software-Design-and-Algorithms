import { createElement, createInput, createLabel } from "../utils";


class Dollar {
  dollarElement: HTMLElement;
  attributes: Map<string, string>;
  mode: string;

  constructor(mode: string, attributes: Map<string, string>) {
    this.attributes = attributes;
    this.mode = mode;
  }

  init() {
    return this.createDollarElement();
  }

  createDollarElement() {
    this.dollarElement = createElement('div');
    this.dollarElement.className = this.mode;
    const label = createLabel('dollar');
    const input = this.setAttributes(createInput('number', 'Enter Dollars'));
    this.dollarElement.append(label);
    this.dollarElement.append(input);
    return this.dollarElement;
  }

  setAttributes(tag: HTMLElement) {
    this.attributes.forEach((value: string, key: any) => {
      tag.setAttribute(key, value);
    });
    return tag;
  }

}

export default Dollar;