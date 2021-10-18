import { getShipmentID, isValidZip } from "./utils";

class State {
  private _shipmentId: number;
  private _toAddress: string;
  private _fromAddress: string;
  private _toZipCode: string;
  private _fromZipCode: string;
  private _weight: number;
  private _marks: Array<String>;

  constructor(shipmentId: number, toAddress: string, fromAddress: string, toZipCode: string, fromZipCode: string, weight: number, marks: Array<String>){
    this._shipmentId = shipmentId ? shipmentId : getShipmentID();
    this._toAddress = toAddress;
    this._fromAddress = fromAddress;
    if(isValidZip(fromZipCode) && isValidZip(toZipCode)) {
      this._toZipCode = toZipCode;
      this._fromZipCode = fromZipCode;
    } else {
      throw new Error('invalid to or from zip code.');
    }
    this._weight = weight;
    this._marks = marks;
  }

  set toAddress(address: string) {
    this._toAddress = address;
  }

  get toAddress(): string {
    return this._toAddress;
  }

  get shipmentId(): number {
    return this._shipmentId;
  }

  set shipmentId(id: number) {
    this._shipmentId = id;
  }

  set fromAddress(address: string) {
    this._fromAddress = address;
  }

  get fromAddress(): string {
    return this._fromAddress;
  }

  set toZipCode(zip: string) {
    if(isValidZip(zip)) this.toZipCode = zip;
    else throw new Error('zip code is invalid.')
  }

  get toZipCode(): string {
    return this._toZipCode;
  }

  get weight(): number {
    return this._weight;
  }

  set marks(marksArray: Array<String>) {
    this._marks = marksArray;
  }

  get marks(): Array<String> {
    return this._marks;
  }

  get fromZipCode(): string {
    return this._fromZipCode;
  }

  set fromZipCode(zip: string) {
    if(isValidZip(zip)) this._fromZipCode = zip;
    else throw new Error('zip code is invalid.')
  }

}

export default State;
