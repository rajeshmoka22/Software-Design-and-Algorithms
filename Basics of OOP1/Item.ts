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

  get getId(): number{
    return this.id;
  }

  get getValue(): number {
    return this.value;
  }

  get getName(): string {
    return this.name;
  }

  get getWeight(): number {
    return this.weight;
  }

  set setId(idVal: number){
    this.id = idVal;
  }

  set setValue(value: number){
    this.value = value;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setWeight(weight: number){
    this.weight = weight;
  }

  reset(): void {
    counter = 0;
  }

  public compareTo(otherItem: Item): number {
    
    if(this.getValue > otherItem.getValue) {
        return 1;
    } else if(this.getValue < otherItem.getValue) {
        return -1;
    } else { // if value is same compare name
        if(this.getName.toLowerCase() > otherItem.getName.toLowerCase()) return 1;
        else return -1;
    }
  }

  toString(): string{
    return `${this.getName} - Value: ${this.getValue}, Weight: ${this.getWeight}`;
  }
}
