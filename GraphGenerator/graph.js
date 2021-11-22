import Dijkstra from "./dijkstras.js";

export default class Graph{
  vertices;
  graph;
  constructor(noOfVertices) {
    this.generateGraph(noOfVertices);
    this.generateVertices(noOfVertices);
  }

  generateGraph(noOfVertices) {
    const row = new Array(noOfVertices).fill(0);
    this.graph = [];
    for(let i=0; i<noOfVertices; i+=1){
      this.graph.push([...row]);
    }
  }

  generateVertices(noOfVertices) {
    this.vertices = new Array(noOfVertices).fill(0).map((value, index) => index);
  }

  addEdge(node1, node2, weight) {
    if(node1< this.size && node2 < this.size && weight > 0) {
      this.graph[node1][node2] = weight;
      this.graph[node2][node1] = weight;
    }
  }

  get size() {
    return this.vertices.length;
  }

  getAdjacentNodes(node){
    if(node < this.size) return this.graph[node];
  }
  
  print() {
    let count = 0;
    console.log(`    ${new Array(this.graph.length).fill(0).map((value, index) => index).join(' ')} \n`)
    this.graph.forEach((row, index) => console.log(`${index} - ${row}`));
  }

  getShortestPath(graphInstance, start, end) {
    const dijkstra = new Dijkstra();
    dijkstra.minDistance(graphInstance, start, end);
  }
}
