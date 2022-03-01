'use strict';

// 1. printIndices
function printIndices(items) {
  for (const index in items) {
    console.log(`${items[index]} ${index}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const index in items) {
    if (index % 2 === 0) {
      result.push(items[index]);
    }
  }

  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a,b) => a - b);
  const newList = items.slice(0,n);
  newList.reverse();
  console.log(newList);
}
