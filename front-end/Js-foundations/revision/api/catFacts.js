const URL = "https://meowfacts.herokuapp.com";
const textPara = document.querySelector("p");
const btn = document.querySelector("button");

// const getFacts = async () => {
//     console.log("getting data....");

//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   textPara.innerText = (data.data[0]);

// };

//  pro way to write

const getFacts = () => {
  console.log("getting facts....");
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        

            textPara.innerText = data.data[0];
        
    });
};

btn.onclick = () => {
  getFacts();
};
