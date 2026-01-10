function getData(dataID) {
  return new Promise((resolve, reject) => {
    console.log(`getting Data ${dataID}..... `);
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

// let pr1 = getData(1);
// pr1.then(() => {
//   console.log("data 1 recieved");
//   let pr2 = getData(2);
//   pr2.then(() => {
//     console.log("data 2 recieved");
//     let pr3 = getData(3);
//     pr3.then((res) => {
//       console.log("data3 recieved");
//       console.log(res);
//     });
//   });
// });

// --------------------------------------

// getData(1).then((res) => {
//   console.log("data 1 recieved");
//   getData(2).then((res) => {
//     console.log("data 2  recieved");
//     getData(3).then((res)=>{
//         console.log("data 3 recieved");

//     })
//   });
// });

//  promise chaining..

// getData(1)
//   .then(() => {
//     console.log("Data 1 recieved");
//     return getData(2);
//   })
//   .then(() => {
//     console.log("data 2 recieved");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log("data 3 recieved");
//     console.log(res);
//   });
