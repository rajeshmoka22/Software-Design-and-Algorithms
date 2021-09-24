import { Item } from './Item';
import ItemComparator from './ItemComparator';

class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item):number {
    if(first.getWeight > second.getWeight) return 1;
    else if(first.getWeight < second.getWeight) return -1;
    else {
      return first.compareTo(second);
    }
  }
}

export default ItemWeightComparator
