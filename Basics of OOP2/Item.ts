import IterableMixin from "./IterableMixin";

abstract class Item extends IterableMixin{
  abstract toString(): string;
}
// commented prototype as we are already extending it.
// Object.assign(Item.prototype, IterableMixin);

export default Item;
