// ONE:  Vertices + Edges List

// edges list and vertices list
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
  ['A', 'B'],
  ['A', 'D'],
  ['B', 'C'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E']
];

// USE CASE 1: Find Adjacent Nodes
const findAdjacentNodes = node => {
  const adjacentNodes = [];
  for (let edge of edges) {
    const nodeIndex = edge.indexOf(node);
    if (nodeIndex > -1) {
      let adjacentNode = nodeIndex === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }

  return adjacentNodes;
}

console.log(findAdjacentNodes('A'));
console.log(findAdjacentNodes('C'));
console.log(findAdjacentNodes('E'));

// USE CASE 2: Is connected -- takes 2 nodes and returns boolean
const isConnected = (node1, node2) => {
  return edges.some(edge => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1 ? true : false;
  });
}

console.log(isConnected('A', 'B')); // True 
console.log(isConnected('B', 'E'));  // False