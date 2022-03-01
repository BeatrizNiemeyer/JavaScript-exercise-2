'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {}

  for (const word of phrase.split(" ")) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;   
    }
    else {
      wordCounts[word] = 1;
    } 
  }
  return wordCounts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}


// // Create object
// const capitals = {
//   MD: 'Annapolis',
//   CA: 'Sacramento',
// };

// // No length

// // Access values with dot-op
// capitals.MD;
// // Or with index
// capitals['MD'];

// // Add/update value
// capitals.OR = 'Salem';

// // Check inclusion
// capitals.hasOwnProperty('OR');