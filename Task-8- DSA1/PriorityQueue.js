class Node {
  constructor(val,priority)
  {
      this.val = val;
      this.priority = priority;
  }
}

export default class PriorityQueue
{
  constructor()
  {
      this.values = [];
  }

  isEmpty() {
    return this.values.length == 0 ;
  }

  peek() {
    if(!this.isEmpty()) return this.values[0];
    return;
  }

  enqueue(val, priority)
  {
      let node = new Node(val,priority);
      this.values.push(node);
      return this.shiftUp();
  }

  shiftUp() {
    if(this.isEmpty()) return this.values;
    let lastIndex = this.values.length-1;
    let element = this.values[lastIndex];
    while(lastIndex > 0)
    {
      let parentIndex = Math.floor((lastIndex - 1)/2);
      if(element.priority >= this.values[parentIndex].priority) break;
      this.swap(lastIndex, parentIndex);
      lastIndex = parentIndex;
    }

    return this.values;
  }

  swap(i,j) {
    [this.values[i],this.values[j]] = [this.values[j],this.values[i]];
  }
  
  dequeue()
  {
     if(this.isEmpty()) return this.values;
     this.swap(0, this.values.length - 1);
     const poppedValue = this.values.pop();
     this.shiftDown();
     return poppedValue;
  }

  shiftDown() {
    let currentIndex = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true){
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let leftChild, rightChild, indexToBeSwapped=null;

      if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if(this.isLessThanRoot(leftChild, element)) {
          indexToBeSwapped = leftChildIndex;
        }
      }
      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];
        if(
            (indexToBeSwapped === null && this.isLessThanRoot(rightChild, element)) || 
            (indexToBeSwapped !== null && this.isLessThanLeftChild(leftChild, rightChild))
        ) {
          indexToBeSwapped = rightChildIndex;
        }
      }

      if(indexToBeSwapped === null) break;
      this.values[currentIndex] = this.values[indexToBeSwapped];
      this.values[indexToBeSwapped] = element;
      currentIndex = indexToBeSwapped;
    }

  }

  isLessThanRoot(child, root){
    return child.priority < root.priority;
  }

  isLessThanLeftChild(leftChild, rightChild) {
    return rightChild.priority < leftChild.priority;
  }

}
