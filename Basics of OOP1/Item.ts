import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {

  private id: number;
  private value: number;
  private name: string;
  private weight: number;
  abstract use(): void;

  constructor(name:string, value: number, weight: number) {
    this.id = id++;
    this.value = value;
    this.name = name;
    this.weight = weight;
    counter++;
  }

  static get numberOfItems(): number {
    return counter;
  }

  get _id(): number{
    return this.id;
  }

  get _value(): number {
    return this.value;
  }

  get _name(): string {
    return this.name;
  }

  get _weight(): number {
    return this.weight;
  }

  set _id(idVal: number){
    this.id = idVal;
  }

  set _value(value: number){
    this.value = value;
  }

  set _name(name: string) {
    this.name = name;
  }

  set _weight(weight: number){
    this.weight = weight;
  }

  reset(): void {
    counter = 0;
  }

  public compareTo(otherItem: Item): number {
    
    if(this._value > otherItem._value) {
        return 1;
    } else if(this._value < otherItem._value) {
        return -1;
    } else { // if value is same compare name
        if(this._name.toLowerCase() > otherItem._name.toLowerCase()) return 1;
        else return -1;
    }
  }

  toString(): string{
    return `${this._name} - Value: ${this._value}, Weight: ${this._weight}`;
  }
}
