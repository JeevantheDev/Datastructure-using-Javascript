import WeightedGraph from "./graph.js";
import PriorityQueue from "./priorityQueue.js";

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

function Dijkstra(start, finish) {
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};
  let path = [];
  let smallest;

  //   Initial state
  for (let vertex in g.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }
  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }
    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in g.adjacencyList[smallest]) {
        let nextNode = g.adjacencyList[smallest][neighbor];
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        if (candidate < distances[nextNode.node]) {
          // Update new smallest distance to neighbor
          distances[nextNeighbor] = candidate;
          //   Updating previous - How to get to neighbor
          previous[nextNeighbor] = smallest;
          //   Enqueue in priority queue with new priority
          nodes.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }
  return path.concat(smallest).reverse();
}

console.log(Dijkstra("A", "F"));
