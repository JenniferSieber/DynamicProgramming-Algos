// Tabulations

// 1. canConstruct(string, wordBank)
// Complexity: m = target, n = wordBank.length
// Time: O(m^2n) Polynomial
// Space: O(m)
const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd' ])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false

// 2. countConstruct(string, wordBank)
// Complexity: m = target, n = wordBank.length
// Time: O(m^2n) Polynomial
// Space: O(m)
const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i];
        }
      }
    }
  
  return table[target.length];
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd' ])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0

// 3. allConstruct(string, wordBank)
// Only option because saving all combinations Exponential Amount of returns--- conceptually a 3d table
// Complexity: m = target, n = wordBank.length
// Time: ~O(n^m) Exponential
// Space: ~O(n^m) Exponential --- 2D array
const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          const newCombinations = table[i].map(subArr => [...subArr, word] );
          table[i + word.length].push(...newCombinations);
        }
      }
    }
  
  return table[target.length];
}

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));  
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd' ]));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])); 
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); 
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // Breaks---- basically this is brute force exponential tabulation