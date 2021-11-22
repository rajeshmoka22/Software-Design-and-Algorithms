import PriorityQueue from "./PriortityQueue.js";

export default class Dijkstra {
  constructor() {
    this.prev = {};
  }

  initPriorityQueue(start, size) {
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);
    for(let i=0; i<size; i+=1) {
      if(i === start) continue;
      pq.enqueue(i, Number.MAX_VALUE);
    }
    return pq;
  }

  minDistance(graphInstance, start, end) {
    this.prev[start] = null;
    const visited = {};
    const pq = this.initPriorityQueue(start, graphInstance.size);

    while(pq.size) {
      const popped = pq.dequeue();
      const currDist = popped.priority;
      if(visited[popped.value]) break;

      const adj = graphInstance.getAdjacentNodes(popped.value);
      for(let i=0; i<adj.length; i+=1) {
        //check for the edges
        if(adj[i] !== 0 && !visited[i]) {
          
          if(pq.getPriority(i) > currDist+adj[i]) {
            pq.updatePriority(i, currDist+adj[i]);
            this.prev[i] = popped.value;
          }
        }
      }
      visited[popped.value] = true;
    }
    this.getShortestPath(start, end);
  }

  getShortestPath(start, end) {
    const path = [];
    let next = end;
    path.push(end);
    while(next!==start) {
      next = this.prev[next];
      path.push(next);
    }
    console.log('\nShortest Path is:')
    console.log(path.reverse().join('-->'), '\n');
  }
}
