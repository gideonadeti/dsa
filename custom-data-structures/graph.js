/**
 * Demonstrates a Graph data structure using an adjacency list (Set-based).
 * A graph consists of a set of vertices (nodes) and edges (connections between nodes).
 * Supports both directed and undirected graphs.
 * Common operations: addVertex, addEdge, removeEdge, removeVertex, hasEdge, getNeighbors, bfs, dfsIterative, dfsRecursive, print, isEmpty, clear
 */
class Graph {
  constructor(isDirected = false) {
    this.adjacencyList = {};
    this.isDirected = isDirected;
  }

  // Add a vertex (node) - O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    } else {
      console.log(`Vertex "${vertex}" already exists.`);
    }
  }

  // Add an edge (connection) - O(1)
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].add(vertex2);

    if (!this.isDirected) {
      this.adjacencyList[vertex2].add(vertex1);
    }
  }

  // Remove an edge - O(1)
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

    this.adjacencyList[vertex1].delete(vertex2);

    if (!this.isDirected) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  // Remove a vertex and all its edges - O(V)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let neighbor of this.adjacencyList[vertex]) {
      this.adjacencyList[neighbor].delete(vertex);
    }

    delete this.adjacencyList[vertex];
  }

  // Check if an edge exists - O(1)
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1]?.has(vertex2) ||
      (!this.isDirected && this.adjacencyList[vertex2]?.has(vertex1))
    );
  }

  // Get neighbors of a vertex - O(1)
  getNeighbors(vertex) {
    return this.adjacencyList[vertex]
      ? Array.from(this.adjacencyList[vertex])
      : [];
  }

  // Breadth-First Search (BFS) traversal - O(V + E)
  bfs(start) {
    if (!this.adjacencyList[start]) return [];

    const visited = new Set();
    const queue = [start];
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();

      result.push(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  // Depth-First Search (DFS) - Iterative - O(V + E)
  dfsIterative(start) {
    if (!this.adjacencyList[start]) return [];

    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        // Push neighbors in reverse order for consistency
        for (let neighbor of [...this.adjacencyList[vertex]].reverse()) {
          if (!visited.has(neighbor)) stack.push(neighbor);
        }
      }
    }

    return result;
  }

  // Print the graph - O(V + E)
  print() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} → ${[...this.adjacencyList[vertex]].join(", ")}`);
    }
  }

  // Check if the graph is empty - O(1)
  isEmpty() {
    return Object.keys(this.adjacencyList).length === 0;
  }

  // Clear the entire graph - O(1)
  clear() {
    this.adjacencyList = {};
  }
}
