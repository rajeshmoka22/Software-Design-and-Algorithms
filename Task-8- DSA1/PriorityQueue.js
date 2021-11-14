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
    let parentIndex = Math.floor((lastIndex-1)/2);
    while(parentIndex >= 0 && this.values[parentIndex].priority > this.values[lastIndex].priority)
    {
      this.swap(lastIndex, parentIndex)
      lastIndex = parentIndex;
      parentIndex = Math.floor((lastIndex-1)/2);
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
     return poppedValue;
  }

  shiftDown() {
    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let lastIndex = this.values.length - 1;

    while(leftChildIndex < lastIndex && rightChildIndex < lastIndex && 
    (this.values[leftChildIndex].priority < this.values[currentIndex].priority 
      || this.values[rightChildIndex].priority > this.values[currentIndex].priority))
    {
      let tempIndex;
      if(this.values[leftChildIndex].priority < this.values[rightChildIndex].priority) tempIndex = leftChildIndex;
      else tempIndex = rightChildIndex;

      if(leftChildIndex > this.values.length-1) tempIndex = rightChildIndex;
      if(rightChildIndex > this.values.length-1) tempIndex = leftChildIndex;
      this.swap(tempIndex, currentIndex);

      currentIndex = tempIndex;
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
    }

    return this.values;
  }

}
