function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve("data", id)
    },2000);
  });
}

function fetchComment(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve("comment data", id)
    },3000);
  });
}


async function printData() {
    console.log("getting profile data");
    let profileData = await fetchData(1);
    let commentData = await fetchComment(1);

    console.log(profileData, commentData);
    console.log("fetch success..");
    
}

printData();