/**
    1. Create a file named “removeDuplicate.js” and inside that file 
    create a function named “remove duplicate”. 
    The function should accept an ordered array with duplicate elements 
    and return an array of unique elements. 
    Example input [1, 2, 2, 3, 3, 3, 4, 5, 5], output should be [1, 2, 3, 4, 5]. 
 */

function removeDuplicate(arr) {
  let ErrorMessage = "";

  // checking: user input must be an Array
  if (Array.isArray(arr) === false)
    return (ErrorMessage = `Invlid input, ${arr}; You did not enter an Array of duplicate value`);

  // checking: Array should not be empty
  if (arr.length == 0)
    return (ErrorMessage = `An empty array; You did not enter an Array of duplicate value `);

  // checking: arr should contain duplicate value
  let duplicated = arr.filter((e) => arr.indexOf(e) != arr.lastIndexOf(e));
  if (duplicated.length == 0) {
    return (ErrorMessage =
      "Ooops! No duplicate value found; Please enter array with duplicate values ");
  }

  // checking: Array should be sorted
  for (let i = 0; i < arr.length; i++) {
    while (arr[i + 1] < arr[i]) {
      return (ErrorMessage =
        "Not a sorted array, Expect Array with sorted items");
    }
  }

  // Remove duplicates
  let uniqArr = [];
  arr.map((e) => {
    if (!uniqArr.includes(e)) {
      uniqArr.push(e);
    }
  });

  return uniqArr;
}
console.log(removeDuplicate("11233"));

console.log(removeDuplicate([1]));

console.log(removeDuplicate([1, 2, 3, 4, 5]));

console.log(removeDuplicate([1, 10, 2, 2]));

console.log(removeDuplicate([1, 2, 2, 3, 3, 3, 4, 5, 5]));
