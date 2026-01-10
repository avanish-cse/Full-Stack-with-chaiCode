// console.log("Hello1");
// console.log("Hello2");
// console.log("Hello3");
// console.log("Hello4");
// setTimeout(() => {
//   console.log("Hello5");
// }, 3000);
// console.log("Hello6");

// callbacks

// function print(){
//     console.log("Youre in the funtion");

// }

// const call = () => {
//     print();
// }
// // 
// call();

// const getData = (dataId, getNextData) => {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// };

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

//promises

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise pura hua");
//     resolve("Promise sucsess !!");
//   });
// };

// let promise = getPromise();

// promise.then((res) => {
//   console.log("promise susses, then block", res);
// });

// promise.catch((err) => {
//   console.log("Error aa gya bhai", err);
// });

// /-------------------------------------------

/// promise chain

const getData = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucsess");
    }, 2000);
  });
};

// console.log("getting data 1....");

// getData(1)
//   .then((res) => {
//     console.log("getting data 2......");

//     return getData(2);
//   })
//   .then((res) => {
//     console.log("getting data 3.......");

//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async-await

async function getAllData() {
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
  console.log("getting data4...");
  await getData(4);
  console.log("getting data5...");
  await getData(5).then((res) => {
console.log(res);

  });

}

// IIFE = Immediately Invoked Function Expression : executed immediately and only once ( one time execution only !!)

// Declaration   " (function (){ function_body}())   "

// (async function () {
//   console.log("getting data1...");
//   await getData(1);
//   console.log("getting data2...");
//   await getData(2);
//   console.log("getting data3...");
//   await getData(3);
//   console.log("getting data4...");
//   await getData(4);
//   console.log("getting data5...");
//   await getData(5).then((res) => {
//     console.log(res);
//   });
// })();
