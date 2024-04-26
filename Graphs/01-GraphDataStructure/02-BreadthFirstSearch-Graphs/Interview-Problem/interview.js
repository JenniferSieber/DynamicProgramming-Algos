// Given a graph of users and their connections,
// find the smallest distance between two users

// create your node with isConnected and graph with addToGraph classes 
class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }

  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  getAdjacentNodes() {
    return this.edgesList;
  }

  isConnected(node) {
    return !!this.edgesList.find(edge => edge.value === node.value);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }


  reconstructPath(visitedNodes, startNode, endNode) {
    let currNode = endNode;
    const shortestPath = [];
   
    while (currNode !== null) {
      shortestPath.push(currNode);
      currNode = visitedNodes[currNode.value];
    }
    
    return shortestPath.reverse();
  }

  // create the logic for a breadth first search
  breadthFirstTraversal(start,end) {
    const queue = [start];
    const visitedNodes = {};

    visitedNodes[start.value] = null;
    
    while(queue.length > 0) {
      const node = queue.shift();

      if (node.value === end.value) {
        console.log('Found it!');
        return this.reconstructPath(visitedNodes, start, end);
      }

      for (const adjacency of node.edgesList) {
        if (!visitedNodes.hasOwnProperty(adjacency.value)) {
          visitedNodes[adjacency.value] = node;
          queue.push(adjacency);
          console.log(adjacency.value);
        } 
      }
    }
    console.log(visitedNodes);
  }
}

// create nodes
const Hannah = new Node('Hannah');
const Mel = new Node('Mel');
const Max = new Node('Max');
const Mary = new Node('Mary');
const Nis = new Node('Nis');
const Dan = new Node('Dan');
const Chris = new Node('Chris');
const Nicolette = new Node('Nicolette');
const Yair = new Node('Yair');
const Mabel = new Node('Mabel');
const Liz = new Node('Liz');
;
// create graph
const graph = new Graph([Hannah, Mel, Max, Mary, Nis,Dan,Chris,Nicolette, Yair, Mabel, Liz]);

// create connections
Hannah.connect(Mel);
Hannah.connect(Max);
Hannah.connect(Mary);
Hannah.connect(Nis);
Hannah.connect(Liz);
Nis.connect(Dan);
Nis.connect(Chris);
Nis.connect(Yair);
Chris.connect(Nicolette);
Yair.connect(Mabel);
Yair.connect(Liz);
Yair.connect(Chris);
Max.connect(Mel);
Mabel.connect(Liz);

// using shortestPath.reverse() return
console.log(graph.breadthFirstTraversal(Hannah, Mabel));