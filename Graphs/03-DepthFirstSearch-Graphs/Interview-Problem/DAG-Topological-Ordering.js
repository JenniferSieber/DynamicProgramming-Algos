console.log(`DAG-Topological Ordering with DFS`)

// classic Node and Graph Classes
class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  } 

  connect(node) {
    this.edgesList.push(node);
  }

  getAdjacentNodes() {
    return this.edgesList;
  }

  isConnected(node) {
    return !! this.edgesList.find(edge => edge.value === node.value);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  //tracks all ways entering graph
  topologicalSort() {
    const visited = new Set();
    const topologicalOrdering = [];
    
    for (const node of this.nodes) {
      this.depthFirstTraversal(node, visited, topologicalOrdering);
    }
    
    console.log(topologicalOrdering.reverse());
  }

  depthFirstTraversal(start, visited, topologicalOrdering) {;
    if (visited.has(start)) return; 
    visited.add(start);
    console.log('Visiting node: ', start.value);

    for (const adjacency of start.edgesList) {
      this.depthFirstTraversal(adjacency, visited, topologicalOrdering);
    }

    topologicalOrdering.push(start.value);
  }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

const graph = new Graph([A, B, C, D, E, F]);

// directional graph based on connect method
A.connect(C);
A.connect(B);
B.connect(D);
D.connect(F);
E.connect(F);
E.connect(C);

console.log(graph);

// need to create this method into our basic classes
graph.topologicalSort();  
