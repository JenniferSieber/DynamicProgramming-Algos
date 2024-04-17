// 1. canConstruct -------------------------------------------
console.log(`1. canConstruct - Brute Force`)
const canConstructBF = (target, stringArr) => {
  if (target === '') return true;

  for (let word of stringArr) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstructBF(suffix, stringArr) === true) {
        return true;
      }
    }
  }

  return false;
}

console.log(canConstructBF('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstructBF('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])) // false
console.log(canConstructBF('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
// console.log(canConstructBF('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false broken LONG STRING plus full exploration with a lot of working prefixes


console.log(`1. canConstruct - Memoization`)

const canConstruct = (target, stringArr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of stringArr) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, stringArr, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])) // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false

// 2. countConstruct -------------------------------------------
console.log(`2. countConstruct - Brute Force`)
const countConstructBF = (target, stringArr) => {
  if (target === '') return 1;

  let totalCount = 0;
  for (let word of stringArr) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstructBF(target.slice(word.length), stringArr);
      totalCount += numWaysForRest;
    }
  }
  return totalCount;
}

console.log(countConstructBF('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstructBF('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstructBF('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])) // 0
console.log(countConstructBF('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
// console.log(countConstructBF('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0 Broken too many prefix calls

console.log(`2. countConstruct - Memoization`)
const countConstruct = (target, stringArr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of stringArr) {
    if (target.indexOf(word) === 0) {
      const numWays = countConstruct(target.slice(word.length), stringArr, memo);
      totalCount += numWays;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0

// 3. allConstruct -------------------------------------------
console.log(`3. allConstruct - Brute Force`)
const allConstructBF = (target, stringArr) => {
  if (target === '') return[[]];

  const result = [];

  for (let word of stringArr) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructBF(suffix, stringArr);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
}

console.log(allConstructBF('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [['purp', 'le'], ['p', 'ur', 'p', 'le']]
console.log(allConstructBF('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // [['abc', 'def']]
console.log(allConstructBF('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // [['ab', 'cd', 'ef'],  ['ab', 'c', 'def'],  ['abc', 'def'], ['abcd', 'ef']]
console.log(allConstructBF('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])) // []

// console.log(allConstructBF('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // []

console.log(`3. allConstruct - Memoization`)
const allConstruct = (target, stringArr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of stringArr) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, stringArr, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [['purp', 'le'], ['p', 'ur', 'p', 'le']]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // [['abc', 'def']]
console.log(allConstructBF('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // [['ab', 'cd', 'ef'],  ['ab', 'c', 'def'],  ['abc', 'def'], ['abcd', 'ef']]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'oard'])) // []

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // []
