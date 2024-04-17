// 1.   canSum -----------------------------------------------
console.log(`1. canSum - Brute Force`)
const canSumBF = (target, numArr) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numArr) {
    const remainder = target - num;
    if (canSumBF(remainder, numArr) === true) {
      return true;
    } 
  }
  return false;
}

console.log(canSumBF(7, [2, 3])); // true
console.log(canSumBF(7, [5, 3, 4, 7])) // true
console.log(canSumBF(8, [2, 3, 5])) // true
console.log(canSumBF(7, [2, 4])) // false
// console.log(canSumBF(300, [7, 14])) // false btpken too slow

console.log(`1. canSum - Memoization`)
const canSum = (target, numArr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numArr) {
    const remainder = target - num;
    if (canSum(remainder, numArr, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(300, [7, 14])) // false
console.log(canSum(700, [7, 14])) // true

// 2.   howSum -----------------------------------------------
console.log(`2. howSum - Brute Force`)
const howSumBF = (target, numArr) => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numArr) {
    const remainder = target - num;
    const remainderResult = howSumBF(remainder, numArr)
    if (remainderResult !== null) {
      return [...remainderResult, num];
    } 
  }
  return null;
}

console.log(howSumBF(7, [2, 3])); // [3,2,2]
console.log(howSumBF(7, [5, 3, 4, 7])) // [4,3]
console.log(howSumBF(8, [2, 3, 5])) // [2,2,2,2]
console.log(howSumBF(7, [2, 4])) // null
// console.log(howSumBF(300, [7, 14])) // null broken too slow

console.log(`2. howSum - Memoization`)
const howSum = (target, numArr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numArr) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, numArr, memo)
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return [...remainderResult, num];
    } 
  }
  memo[target] = null;
  return null;
}

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum(7, [5, 3, 4, 7])) // [4,3]
console.log(howSum(8, [2, 3, 5])) // [2,2,2,2]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(300, [7, 14])) // null 
console.log(howSum(700, [7, 14])) // [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]


// 3.   bestSum ----------------------------------------------
console.log(`3. bestSum - Brute Force`)
const bestSumBF = (target, numArr) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombo = null;

  for (let num of numArr) {
    const remainder = target - num;
    const remainderCombo = bestSumBF(remainder, numArr)

    if (remainderCombo !== null) {
      const combination = [...remainderCombo, num];
      if (shortestCombo === null || combination.length < shortestCombo.length) {
        shortestCombo = combination;
      }
    }
  }
  return shortestCombo;
}

console.log(bestSumBF(7, [5, 3, 4, 7])) // [7]
console.log(bestSumBF(8, [2, 3, 5])) // [3, 5]
console.log(bestSumBF(8, [1,4,5])) // [4,4]
// console.log(bestSumBF(100, [1,2,5,25])) // [25,25,25,25]
// console.log(bestSumBF(700, [7, 14])) // [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]

console.log(`3. bestSum - Memoization`)
const bestSum = (target, numArr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombo = null;

  for (let num of numArr) {
    const remainder = target - num;
    const remainderCombo = bestSum(remainder, numArr, memo)

    if (remainderCombo !== null) {
      const combination = [...remainderCombo, num];
      if (shortestCombo === null || combination.length < shortestCombo.length) {
        shortestCombo = combination;
      }
    }
  }
  memo[target] = shortestCombo;
  return shortestCombo;
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1,4,5])) // [4,4]
console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]
console.log(bestSum(700, [7, 14])) // [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14]
