function formatThousand(num) {
  formatedNum = num.toLocaleString();
  return formatedNum;
}
formatThousand(1000000);
console.log(formatThousand(10000000));
console.log(formatThousand(1234503.05));
console.log(formatThousand(12345.05));
