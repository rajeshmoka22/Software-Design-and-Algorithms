import Graph from "./graph.js";

const graph = new Graph(5); // 5 is no of vertices
graph.addEdge(0,1,3); // 0,1,3 are vertice1, vertice2, distance between two vertices respectively.
graph.addEdge(0,4,8);
graph.addEdge(0,3,7);
graph.addEdge(1,3,4);
graph.addEdge(1,2,1);
graph.addEdge(4,3,3);
graph.addEdge(3,2,2);
graph.print();
graph.getShortestPath(graph, 0, 3);