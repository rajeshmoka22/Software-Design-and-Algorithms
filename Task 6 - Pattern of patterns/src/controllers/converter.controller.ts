import { ConverterSerivce } from '../services/converter.service';
import { CurrencyConverterView } from '../views/converter.view';

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
export class ConverterController {
  constructor(public converterService: ConverterSerivce, public converterView: CurrencyConverterView) {
    // Explicit this binding
    this.converterView = converterView;
    this.converterService = converterService;
    this.converterView.bindHandleModeACurrencyChange(this.handleCurrencyChange.bind(this));
    this.converterView.bindHandleModeBCurrencyChange(this.handleIndividualCurrencyChange.bind(this));
    this.converterService.convertDollarToOthers.bind(this);
    this.converterService.convertEuroToOthers.bind(this);
    this.converterService.convertRupeeToOthers.bind(this);
  }

  handleCurrencyChange(name, value) {
    let obj;
    if(name === 'rupee') {
      obj = this.converterService.convertRupeeToOthers(value);
    } else if(name === 'dollar') {
      obj = this.converterService.convertDollarToOthers(value);
    } else {
      obj = this.converterService.convertEuroToOthers(value);
    }
    this.converterView.updateFormA(obj);
  }

  handleIndividualCurrencyChange(node, name, value) {
    let obj;
    if(name === 'rupee') {
      obj = this.converterService.convertRupeeToOthers(value);
    } else if(name === 'dollar') {
      obj = this.converterService.convertDollarToOthers(value);
    } else {
      obj = this.converterService.convertEuroToOthers(value);
    }
    this.converterView.updateFormB(node, obj);
  }

}
