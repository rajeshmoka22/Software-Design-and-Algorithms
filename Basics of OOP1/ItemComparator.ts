import { Item } from './Item';
import { Comparator } from './Comparator';

interface ItemComparator extends Comparator<Item> {
    compare(first: Item, second: Item): number;
}

export default ItemComparator;
