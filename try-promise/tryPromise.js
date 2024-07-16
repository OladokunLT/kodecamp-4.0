const doSomething = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("hello world");
  }, 5000);
});

// doSomething
//   .then((val) => {
//     console.log(val);

//     const doSomethingTwo = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         return resolve("hello world Two");
//       }, 5000);
//     });

//     doSomethingTwo
//       .then((val) => {
//         console.log(val);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const isEvenNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("Yes It's an even number");
    } else {
      reject("No it's an odd number");
    }
  });
};

async function executePromise() {
  try {
    const result = await isEvenNumber(5);
    console.log(await doSomething);
    console.log(result);
  } catch (err) {
    console.log(console.log("There is a problem: ", err));
  } finally {
    console.log("done");
  }
}
executePromise();
// isEvenNumber(4)
//   .then((val) => val + " Yaay")
//   .then((v) => console.log(v))
//   .catch((err) => console.log("There is a problem: ", err))
//   .finally(() => console.log("Done"));

const greet = new Promise((res, rej) => {
  setTimeout(() => {
    return res("Good morning class");
  }, 3000);
});

async function exeGreet() {
  try {
    console.log(await greet);
  } catch (error) {
    console.log("error: ", error);
  }
}

exeGreet();
