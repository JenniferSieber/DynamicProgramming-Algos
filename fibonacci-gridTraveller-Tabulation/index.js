// Tabulation -return to other Problems:
// Linear Time and Space O(n)
console.log(`Tabulation: Fibonacci`)
const fibonacciTab = n => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
 
  for (let i = 0; i <= n; i++) {
    
    table[i + 1] += table[i] 
    table[i + 2] += table[i] 
  }

  return table[n];
}

console.log(fibonacciTab(6)); // 8
console.log(fibonacciTab(50)); // 12586269025

// Tabulation - gridTraveller 
// Time and Space O(mn) each
console.log(`Tabulation: Grid Traveller`)
const gridTravellerTab = (rows, cols) => {
  const table = Array(rows + 1)
    .fill()
    .map(() => Array(cols + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      const current = table[i][j];
      if (j + 1 <= cols) table[i][j + 1] += current;
      if (i + 1 <= rows) table[i + 1][j] += current;
    }
  }

  return table[rows][cols];
}

console.log(gridTravellerTab(3,3))