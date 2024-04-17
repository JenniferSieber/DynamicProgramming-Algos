//  1. Fibonacci Sequence

console.log(`Fibonacci Sequence - Brute Force`)
const fibBF = n => {
  if (n <= 2) return 1;
  return fibBF(n - 1) + fibBF(n - 2) 
}

console.log(fibBF(6));
console.log(fibBF(7));
console.log(fibBF(8));
// console.log(fibBF(50)) // too slow breaks cpu


console.log(`Fibonacci Sequence - Memoization`)
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n]
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50)) // too slow breaks cpu

// 2. Grid Traveller
console.log(`Grid Traveller - Brute Force`)
const gridTravellerBF = (rows, cols) => {
  if (rows === 0 || cols === 0) return 0;
  if (rows === 1 && cols === 1) return 1;

  return gridTravellerBF(rows - 1, cols) + gridTravellerBF(rows, cols - 1);
}
console.log(gridTravellerBF(1,1)); // 1
console.log(gridTravellerBF(2,3)); // 3
console.log(gridTravellerBF(3,2)); // 3
console.log(gridTravellerBF(3,3)); // 6
//console.log(gridTravellerBF(18,18)) // 2,333,606,220 Breaks too slow 

console.log(`Grid Traveller - Memoization`)
const gridTraveller = (rows, cols, memo = {}) => {
  const key = rows + ',' + cols;
  if (key in memo) return memo[key];
  if (rows === 0 || cols === 0) return 0;
  if (rows === 1 && cols === 1) return 1;

  memo[key] = gridTraveller(rows - 1, cols, memo) + gridTraveller(rows, cols - 1, memo);
  return memo[key];
}
console.log(gridTraveller(1,1)); // 1
console.log(gridTraveller(2,3)); // 3
console.log(gridTraveller(3,2)); // 3
console.log(gridTraveller(3,3)); // 6
console.log(gridTraveller(18,18)); // 2,333,606,220 Breaks too slow 