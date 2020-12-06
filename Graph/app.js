class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  recursiveDFS(start) {
    const result = [];
    const visted = {};
    const adjacencyList = this.adjacencyList;
    (function dfsRec(vertex) {
      if (!vertex) return null;
      visted[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!visted[v]) {
          return dfsRec(v);
        }
      });
    })(start);
    return result;
  }

  iterativeDFS(start) {
    const visited = {};
    const result = [];
    const stack = [start];
    let currentVertex;
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }

    return result;
  }
}

const grh = new Graph();
console.log("Adding Vertex");
grh.addVertex("A");
grh.addVertex("B");
grh.addVertex("C");
grh.addVertex("D");
grh.addVertex("E");
grh.addVertex("F");
console.log(grh.adjacencyList);
console.log("Adding Edge");
grh.addEdge("A", "B");
grh.addEdge("A", "C");
grh.addEdge("B", "D");
grh.addEdge("C", "E");
grh.addEdge("D", "E");
grh.addEdge("D", "F");
grh.addEdge("E", "F");
console.log(grh.adjacencyList);

// console.log("Removing Edge");
// grh.removeEdge("A", "C");
// console.log(grh.adjacencyList);

// console.log("Removing Vertex");
// grh.removeVertex("B");
// console.log(grh.adjacencyList);

console.log("DFS in Recursive");
console.log(grh.recursiveDFS("A"));
console.log("DFS in Iterative");
console.log(grh.iterativeDFS("A"));
console.log("BFS");
console.log(grh.bfs("A"));
