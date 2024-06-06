/**
 
4. Create a file named “limitByLength.js” and inside the file create a function named “limitByLength” that accepts a string, checks if the characters in the string is greater than 100. If the characters in the string is not greater then 100, return the string, but if the characters in the string is greater than 100, return the first 100 characters in the string with three dots at the end. Example:

Input (wtih characters greater than 100):

`ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.`

Output:

`ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auc...`

 */

function limitByLength(str) {
  if (str.length <= 100) return str;
  return str.slice(0, 100).concat("...");
}

console.log(
  limitByLength(
    `ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.`
  )
);

console.log(
  limitByLength(
    `ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.`
  )
);
