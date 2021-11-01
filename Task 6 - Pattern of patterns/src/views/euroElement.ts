import { createElement, createInput, createLabel } from "../utils";


class Euro {
  euroElement: HTMLElement;
  attributes: Map<string, string>;
  mode: string;

  constructor(mode: string, attributes: Map<string, string>) {
    this.attributes = attributes;
    this.mode = mode;
  }

  init() {
    return this.createEuroElement();
  }

  createEuroElement() {
    this.euroElement = createElement('div');
    const label = createLabel('euro');
    const input = this.setAttributes(createInput('number', 'Enter Euros'));
    this.euroElement.append(label);
    this.euroElement.append(input);
    return this.euroElement;
  }

  setAttributes(tag: HTMLElement) {
    this.attributes.forEach((value: string, key: any) => {
      tag.setAttribute(key, value);
    });
    return tag;
  }

}

export default Euro;