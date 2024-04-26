// Implementation Three: Adjacency List  
// Node and Graph Classes with necessary methods
class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }

  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  getAdjacencyNodes() {
    return this.edgesList.map(edge => edge.value);
  }

  isConnected(node) {
    return this.edgesList.map(edge => edge.value).indexOf(node.value) > - 1;
  }
}


class Graph {
  constructor(nodes) {
    this.nodes = [...nodes]; 
  }
  
  addToGraph(node) {
    this.nodes.push(node);
  }
} 

// Initialized the Nodes to create Graph
const nodeA = new Node('A'); 
const nodeB = new Node('B'); 
const nodeC = new Node('C'); 
const nodeD = new Node('D'); 
const nodeE = new Node('E'); 

// create graph with nodes
const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

// create edgeLists for the nodes
nodeA.connect(nodeB); 
nodeA.connect(nodeD);
nodeB.connect(nodeC); 
nodeC.connect(nodeD); 
nodeC.connect(nodeE);
nodeD.connect(nodeE);

// loop && show all nodes in graph
for (let node of graph.nodes) {
  console.log(`Node: ${node.value}`);
  // loop over edges, print out each of its connections/edges
  for (let connectedNode of node.edgesList) {
    console.log(`Node ${node.value} is connected to ${connectedNode.value}`);
  }
}

// use getAdjacencyNode method
console.log('Adjacent Nodes to A ', nodeA.getAdjacencyNodes());
console.log('Adjacent Nodes to B ', nodeB.getAdjacencyNodes());
console.log('Adjacent Nodes to C ', nodeC.getAdjacencyNodes());
console.log('Adjacent Nodes to D ', nodeD.getAdjacencyNodes());
console.log('Adjacent Nodes to E ', nodeE.getAdjacencyNodes());

// isConnected Method test
console.log(nodeA.isConnected(nodeB));
console.log(nodeA.isConnected(nodeC));