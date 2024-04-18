// Challenge: 
//        build algorithm for auto correct engine
// getNearbyWords('gi', ) ---> ['hi', 'go']

// Helper Functions contrived--- only working for the ex hi, go & nearby chars on keyboard returned in array


/** 
 * A function that accepts a letter and returns list of all nearby characters
 * @param {str} letter the character the user typed in
 * @returns {arr} of characters nearby the letter typed on keyboard
 * **/ 
// contrived for this example
function getNearbyChars(letter) {
  if (!letter || letter.length < 1) return []
   letter = letter.toLowerCase()
  if (letter === 'g') {
    return ['g', 'h', 'f']
  } else if (letter === 'i') {
    return ['i', 'o', 'k']
  } 
  else {
    return []
  }
}

/** 
 * A function that accepts a string and validates whether its an actual word 
 * @param {str} word  word checking if actual word
 * @returns {boolean} whether word passed in is actual word or not
 * **/ 
function isWord(word) {
// contrived for this example words hi and go
const words = ['hi', 'go']
if (words.indexOf(word) > -1) return true

return false
}
// check for functioning helper functions
// console.log(getNearbyChars('g'))  // ['g', 'h', 'f']
// console.log(getNearbyChars('i')) //  ['i', 'o', 'k']
// console.log(getNearbyChars('z')) // []
// console.log(getNearbyChars('')) // []
// console.log(getNearbyChars('gi')) // []
// console.log(isWord('hi')) //t
// console.log(isWord('go')) //t
// console.log(isWord('bye')) //f
// console.log(isWord('')) //f


  /** 
 * A function to find all the permutations of the letters passed in
 * @param {str} letters that we need to find permutations for 
 * @returns {Set} listwith JS Set (like array) without ordering and prevents duplicate values
 * **/ 
function getNearbyPermutations(letters, idx) {
  const permutations = new Set([''])
  if (idx >= letters.length) {
    return permutations
  }
 
  const subsequentLetterPermutations = getNearbyPermutations(letters, idx + 1) 
  const nearbyLetters = getNearbyChars(letters[idx]) 

  subsequentLetterPermutations.forEach(subLetterPermutation => {
    nearbyLetters.forEach(letter => {
      permutations.add(`${letter}${subLetterPermutation}`)
    })
  })
 
  return permutations
}

  /** 
 * A function that given a typed in word returns all possible words that user might of meant to type
 * @param {str} word  word user typed in
 * @returns {array} of possible words user meant to type
 * **/ 
function getNearbyWords(word) {
  const permutations = getNearbyPermutations(word, 0)
  return [...permutations].reduce((acc, permutation) => {
    if (isWord(permutation)) {
      acc.push(permutation)
    }
    return acc // regardless if word or not
  }, [])
}

console.log('getNearbyWords', getNearbyWords('gi'))
