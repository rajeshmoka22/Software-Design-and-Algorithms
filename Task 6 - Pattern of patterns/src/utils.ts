
export function createElement(tagName: any) {
  return document.createElement(tagName) as HTMLElement;
}

export function createLabel(content: string){
  const label = createElement('label');
  label.innerText = content;
  return label;
}

export function createInput(type: string, placeholder?: string) {
  const input = createElement('input') as HTMLInputElement;
  input.type = type;
  input.placeholder = placeholder || '';
  return input;
}