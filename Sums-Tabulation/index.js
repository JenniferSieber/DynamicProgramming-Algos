// 1: canSum(targetSum, numbers) Tabulation 
// Complexity: m = targetSum, n = numbers.length
// Time: O(mn)
// Space: O(mn)
const canSum = (targetSum, numbers) => {

  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
      if (table[i] === true) {
        for (let num of numbers) {
          table[i + num] = true;
        }
      }
    }

  return table[targetSum];
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false


// 2: howSum(targetSum, numbers) Tabulation
// TIME: O(m^2n)  SPACE: 2DTable- O(m^2) POLYNOMIAL
const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [ ...table[i], num ];
      }
    }
  }
  
  return table[targetSum];
}
console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); // null

// 3: bestSum(targetSum, numbers) Tabulation -- shortest combination of numbers elements to targetSum
// TIME: O(m^2n)  SPACE: 2DTable- O(m^2) POLYNOMIAL
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [ ...table[i], num ];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  
  return table[targetSum];
}
console.log(bestSum(7, [2, 3])); // [3,2,2]
console.log(bestSum(7, [5, 3, 4, 7])); // [4,3]
console.log(bestSum(7, [2, 4])); // null
console.log(bestSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(bestSum(300, [7, 14])); // null
