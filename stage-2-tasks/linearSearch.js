/*
3. Create a file named “linearSearch.js” and inside the file, create a function named “linearSearch”. 
The function should search for a string in an array of strings and return 
“Yes, the string exists in the array” if the string is found and 
“No, the string does not exist in the array”. 
Note: Don't use include or indexOf methods for this exercise.
*/

function linearSearch(str, arr) {
  let searchResult = arr.find(
    (e) => e.toLowerCase() == str.trim().toLowerCase()
  );

  let output =
    searchResult == str
      ? `Yes, the string, "${str}" exists in the array`
      : `No, the string, "${str}" does not exists in the array`;

  return output;
}

console.log(
  linearSearch("Pigeot", ["Toyota", "Pigeot", "BMW", "Audi", "Mazda"])
);

console.log(
  linearSearch("Hyunda", ["Toyota", "Pigeot", "BMW", "Audi", "Mazda"])
);
