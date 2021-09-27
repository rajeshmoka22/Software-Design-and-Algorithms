import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {

  private _id: number;
  private _value: number;
  private _name: string;
  private _weight: number;
  abstract use(): void;

  constructor(name:string, value: number, weight: number) {
    this._id = id++;
    this._value = value;
    this._name = name;
    this._weight = weight;
    counter++;
  }

  static get numberOfItems(): number {
    return counter;
  }

  get id(): number{
    return this._id;
  }

  get value(): number {
    return this._value;
  }

  get name(): string {
    return this._name;
  }

  get weight(): number {
    return this._weight;
  }

  set id(idVal: number){
    this._id = idVal;
  }

  set value(value: number){
    this._value = value;
  }

  set name(name: string) {
    this._name = name;
  }

  set weight(weight: number){
    this._weight = weight;
  }

  reset(): void {
    counter = 0;
  }

  public compareTo(otherItem: Item): number {
    
    if(this.value > otherItem.value) {
        return 1;
    } else if(this.value < otherItem.value) {
        return -1;
    } else { // if value is same compare name
        if(this.name.toLowerCase() > otherItem.name.toLowerCase()) return 1;
        else return -1;
    }
  }

  toString(): string{
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }
}
