// Edges List Approach with Node class and Graph Class

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

  breadthFirstTraversal(start, end) {
    const queue = [start];
    const visitedNodes = new Set();
    visitedNodes.add(start);

    while(queue.length > 0) {
      const node = queue.shift();

      if (node.value === end.value) {
        console.log('Found it!');
      }

      for (const adjacency of node.edgesList) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          visitedNodes.add(adjacency);
        }     
      }
      console.log(node.value);
    } 
  }
}

// create nodes for each airport
const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const HKG = new Node('HKG');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');

// create graph of nodes
const graph = new Graph([DFW, JFK, LAX, HNL, EWR, BOS, MIA, MCO, PBI]);

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

//go from DFW to MIA
graph.breadthFirstTraversal(DFW, MIA);
