function formatName(str) {
  let strArr = str.trim().split(" ");
  let changedStrArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let modifiedStr =
      strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
    changedStrArr.push(modifiedStr);
  }

  return (str = changedStrArr.join(" "));
}

formatName(" victor red ");
console.log(formatName(" victor red "));
console.log(formatName("lukman tunde OLADOKUN "));
console.log(formatName("  lUKMAN tUNDE oLADOKUN"));
