import { createElement, createInput, createLabel } from "../utils";


class Rupee {
  rupeeElement: HTMLElement;
  attributes: Map<string, string>;
  mode: string;

  constructor(mode: string, attributes: Map<string, string>) {
    this.attributes = attributes;
    this.mode = mode;
  }

  init() {
    return this.createRupeeElement();
  }

  createRupeeElement() {
    this.rupeeElement = createElement('div');
    const label = createLabel('rupee');
    const input = this.setAttributes(createInput('number', 'Enter Rupees'));
    this.rupeeElement.append(label);
    this.rupeeElement.append(input);
    return this.rupeeElement;
  }

  setAttributes(tag: HTMLElement) {
    this.attributes.forEach((value: string, key: any) => {
      tag.setAttribute(key, value);
    });
    return tag;
  }

}

export default Rupee;