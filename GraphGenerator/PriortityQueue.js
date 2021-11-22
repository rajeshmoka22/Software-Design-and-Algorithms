import Node from './node.js';

export default class PriorityQueue{

  constructor() {
    this.items = [];
  }

  enqueue(vertex, priority) {
    const node = new Node(vertex, priority);
    
    // check for the appropriate position for the node
    for(let i=0;i<this.size; i+=1) {
      if(this.items[i].priority > priority) {
        this.items.splice(i,0, node);
        return;
      }
    }

    // if not found add at the last position
    this.items.push(node);
  }

  dequeue() {
    if(!this.isEmpty) {
      return this.items.shift();
    }
  }

  updatePriority(value, priority) {
    const index = this.items.findIndex(item => item.value === value);
    if(index > -1){
      this.items.splice(index,1);
    }
    this.enqueue(value, priority);
  }

  getPriority(value) {
    const item = this.items.find(pqItem => pqItem.value === value);
    return item.priority;
  }

  poll() {
    if(!this.isEmpty) return this.items[0];
  }

  get isEmpty() {
    return this.items.length == 0;
  }

  get size() {
    return this.items.length;
  }

}
