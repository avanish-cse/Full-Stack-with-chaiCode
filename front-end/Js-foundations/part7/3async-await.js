function getData(id) {
  console.log(`getting data${id}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data${id} recieved`);
      resolve(200);
    }, 2000);
  });
}

// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4).then((res) => {
//     console.log(res);
//   });
// }

// getAllData();

//  use iifes with async functions....

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4).then((res) => {
    console.log(res);
  });
})();


