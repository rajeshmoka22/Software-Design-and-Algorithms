import ModeAFactory from '../models/modeAFactory';
import ModeBFactory from '../models/modeBFactory';
import { createElement, createInput, createLabel } from '../utils';

/**
 * @class View
 *
 * Visual representation of the model.
 */

export class CurrencyConverterView {
  private app: HTMLElement;
  private mode: string;
  private view: string;
  private title: HTMLElement;
  private userList: HTMLElement;
  modeAForm: HTMLElement;
  modeBForm: HTMLElement;
  modeRadio: HTMLElement;
  changeViewElement: HTMLElement;

  constructor() {
    this.view = 'inputs';
    this.app = this.getElement('#root');
    this.modeAForm = new ModeAFactory().init();
    this.modeBForm = new ModeBFactory().init();
    this.modeBForm.style.display = 'none';
    this.title = this.createElement('h1');
    this.modeRadio = this.createRadioBtn();
    this.changeViewElement = this.createButtons();

    this.title.textContent = 'Currency Converter';
    this.app.append(this.title, this.changeViewElement, this.modeRadio, this.modeAForm, this.modeBForm);
  }

  createElement(tag: string, className?: string) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector: string): HTMLElement {
    return document.querySelector(selector);
  }

  toggleMode() {
    if(this.mode === 'modeB') {
      this.modeAForm.style.display = 'none';
      this.modeBForm.style.display = 'block';
    } else {
      this.modeAForm.style.display = 'block';
      this.modeBForm.style.display = 'none';
    }
  }

  createRadioBtn() {
    const div = createElement('div');
    div.classList.add('modeRadio');
    const radio1 = createInput('radio');
    const radio2 = createInput('radio');
    radio1.value = 'modeA';
    radio1.checked = true;
    radio2.value = 'modeB';
    radio1.name = 'modeRadio';
    radio2.name = 'modeRadio';
    const label1 = createLabel('Mode A');
    const label2 = createLabel('Mode B')
    div.append(radio1,label1, radio2, label2);
    radio1.addEventListener('change', (e) => {
      this.mode = (<HTMLInputElement>e.target).value;
      this.toggleMode();
    })
    radio2.addEventListener('change', (e) => {
      this.mode = (<HTMLInputElement>e.target).value;
      this.toggleMode();
    })

    return div;
  }

  createButtons() {
    const div = createElement('div');
    div.classList.add('viewBtns');
    const inputBtn = createElement('button');
    inputBtn.innerText = 'Inputs';
    inputBtn.classList.add('activeBtn');
    const sliderBtn = createElement('button');
    sliderBtn.innerText = 'Sliders';
    inputBtn.addEventListener('click', (e) => {
      if(this.view !== 'inputs') {
        this.view = 'inputs';
        (<HTMLElement>e.target).classList.add('activeBtn');
        sliderBtn.classList.remove('activeBtn');
        this.changeView();
      }
    })
    sliderBtn.addEventListener('click', (e) => {
      if(this.view !== 'sliders'){
        this.view = 'sliders';
        (<HTMLElement>e.target).classList.add('activeBtn');
        inputBtn.classList.remove('activeBtn');
        this.changeView();
      }
    })

    div.append(inputBtn, sliderBtn);
    return div;
  }

  changeView() {
    const modeAInputs = this.modeAForm.querySelectorAll('input');
    const modeBInputs = this.modeBForm.querySelectorAll('input');
    if(this.view === 'inputs') {
      [...modeAInputs, ...modeBInputs].forEach(input => {
        const { name } = input.dataset;
        const key = name.split('-')[1];
        const valueFromLabel = input.previousElementSibling.textContent.split('-')[1]
        input.previousElementSibling.textContent = key;
        input.type = 'number';
        // input.value = `${Number(input.max) > 100 ? input.max: input.value}`;
        input.value = valueFromLabel.trim();
        input.removeAttribute('max');
        
      })
    } else {
      [...modeAInputs, ...modeBInputs].forEach(input => {
        input.max = Math.max(Number(input.value), 100).toString();
        const { name } = input.dataset;
        const key = name.split('-')[1];
        input.previousElementSibling.textContent = `${key} - ${input.value}`;
        input.type = 'range';
      })
    }
  }

  updateFormA(rates: Object) {
    const inputs = this.modeAForm.querySelectorAll('input');
    inputs.forEach((input) => {
      const {name} = input.dataset;
      const key = name.split('-')[1];
      const value = rates[key];
      if(this.view === 'sliders') {
        input.max = Math.max(Number(value), 100).toString();
        input.previousElementSibling.textContent = `${key} - ${value}`;
      } else input.previousElementSibling.textContent = key;
      input.value = value;
    })
  }

  updateFormB(element: HTMLElement, rates: Object) {
    const inputs = element.parentNode.querySelectorAll('input');
    inputs.forEach(input => {
      const { name } = input.dataset;
      const key = name.split('-')[1];
      const value = rates[key];
      if(this.view === 'sliders') {
        input.max = Math.max(Number(value), 100).toString();
        input.previousElementSibling.textContent = `${key} - ${value}`;
      } else input.previousElementSibling.textContent = key;
      input.value = value;
    })
  }

  bindHandleModeACurrencyChange(handler: Function) {
    const inputs = this.modeAForm.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('change', (e)=> {
        const { name } = (<HTMLInputElement>e.target).dataset;
        const { value } = (<HTMLInputElement>e.target);
        handler(name.split('-')[1], value);
      })
    })
  }

  bindHandleModeBCurrencyChange(handler: Function) {
    const inputs = this.modeBForm.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        const { name } = (<HTMLInputElement>e.target).dataset;
        const { value } = (<HTMLInputElement>e.target);
        handler(input.parentNode, name.split('-')[1], value);
      })
    })
  }
}
