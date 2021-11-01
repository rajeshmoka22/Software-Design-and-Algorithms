import { DollarResponse, EuroResponse, RupeeResponse } from '../models/converter.model';

/**
 * @class Service
 *
 * Manages the data of the application.
 */

export class ConverterSerivce {
  public dollarResponse: DollarResponse;
  public rupeeResponse: RupeeResponse;
  public euroResponse: EuroResponse;

  constructor() {
    this.init();
  }

  async init(){
    const dollarResp = await this.getDollarConversionRate();
    this.dollarResponse = await dollarResp.json();
    const rupeeResponse = await this.getRupeeConversionRate();
    this.rupeeResponse = await rupeeResponse.json();
    const euroResponse = await this.getEuroConversionRate();
    this.euroResponse = await euroResponse.json();
  }

  getDollarConversionRate() {
    return fetch('../dollarRates.json')
  }

  getRupeeConversionRate() {
    return fetch('../rupeeRates.json')
  }

  getEuroConversionRate() {
    return fetch('../euroRates.json')
  }

  convertRupeeToOthers(value) {
    const dollars = this.rupeeResponse.dollar * value;
    const euros = this.rupeeResponse.euro * value;
    return {
      rupee: value,
      dollar: dollars,
      euro: euros
    }
  }

  convertDollarToOthers(value) {
    const euros = this.dollarResponse.euro * value;
    const rupees = this.dollarResponse.rupee * value;
    return {
      rupee: rupees,
      euro: euros,
      dollar: value
    }
  }

  convertEuroToOthers(value) {
    const dollars = this.euroResponse.dollar * value;
    const rupees = this.euroResponse.rupee * value;
    return {
      rupee: rupees,
      dollar: dollars,
      euro: value
    }
  }
}
