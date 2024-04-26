// Implementation Two--- Adjacency Matrix

// Vertices/Nodes && adjacencyMatrix
const vertices = ['A', 'B', 'C', 'D', 'E'];
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],  // A
  [1, 0, 1, 0, 0], // B
  [0, 1, 0, 1, 1], // C
  [1, 0, 1, 0, 1], // D
  [0, 0, 1, 1, 0], // E
];

// USE CASE 1: Find Adjacent Nodes
const vertexIndex = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
};

const findAdjacencies = node => {
  const adjacentNodes = [];
  for (let i = 0; i < vertices.length; i++) {
    nodeVertex = vertexIndex[node]; 
    if (adjacencyMatrix[nodeVertex][i] === 1) {
      adjacentNodes.push(vertices[i]);
    }
  }
 
  return adjacentNodes;
}

console.log(findAdjacencies('A'));
console.log(findAdjacencies('C'));
console.log(findAdjacencies('E'));

// USE CASE 2: Is connected -- takes 2 nodes and returns boolean
const isConnected = (node1, node2) => {
  const nodeIndex1 = vertexIndex[node1];
  const nodeIndex2 = vertexIndex[node2];

  return !!adjacencyMatrix[nodeIndex1][nodeIndex2];
}

console.log(isConnected('A', 'B')); // True 
console.log(isConnected('B', 'E'));  // False