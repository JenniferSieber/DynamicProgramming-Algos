// Depth First Traversal create classes for Node and graph

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

  depthFirstTraversal(start, end, visited) {
    if (!visited) {
      visited = new Set();
    }
    
    if (start.value === end.value) {
      console.log('Found the Node', start.value);
      return;
    }
    
    console.log('Visiting Node: ', start.value);
    visited.add(start);

    for (let adjacency of start.edgesList) {
      if (!visited.has(adjacency) ) { 
        this.depthFirstTraversal(adjacency, end, visited);
      }
    }
  }
}

// create nodes for each airport
const DFW = new Node('DFW');
const LAX = new Node('LAX');
const JFK = new Node('JFK');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const HKG = new Node('HKG');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');

// create graph of nodes
const graph = new Graph([DFW, JFK, LAX, HNL, SAN, HKG, EWR, BOS, MIA, MCO, PBI]);

// define connections as per the graph image
DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
SAN.connect(HKG);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);

// depth first traversal

graph.depthFirstTraversal(DFW, HKG);