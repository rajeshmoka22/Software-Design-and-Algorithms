import { Item } from "./Item";
import ItemComparator from "./ItemComparator";
import ItemWeightComparator from "./ItemWeightComparator";

// your code goes here
class Inventory implements ItemComparator{
  items: Array<Item> = [];

  constructor();
  constructor(items: Array<Item>);
  constructor(items?: Array<Item>) {
    if(items) this.items = items;
  }

  sort(): void;
  sort(comparator: ItemWeightComparator): void;
  sort(comparator?: ItemWeightComparator){
    if(comparator){
      this.items.sort((item1, item2) => comparator.compare(item1, item2));
    } else {
      this.items.sort((item1, item2) => this.compare(item1, item2));
    }
  }

  compare(item1: Item, item2: Item): number {
    if(item1.getValue > item2.getValue) return 1;
    else if(item1.getValue < item2.getValue) return -1;
    else { // if value is same compare name
        if(item1.getName.toLowerCase() > item2.getName.toLowerCase()) return 1;
        else return -1;
    }
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  toString(): string {
    return this.items.map(item => item.toString()).toString();
  }
}

export default Inventory;
