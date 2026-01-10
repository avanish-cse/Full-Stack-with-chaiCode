// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "Avanish Chaurasiya", url: "www.maxindian.com" });
//     }, 3000);
//   });
// }

function getData(dataID, callBack) {
  console.log(`Getting Data ${dataID}....`);

  setTimeout(() => {
    console.log("Data: ", dataID);
    if (callBack) {
      callBack();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
