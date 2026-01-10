
const  URL = "https://dog.ceo/api/breeds/image/random";  // free api
const imgDiv = document.querySelector("#div");
const img = document.querySelector("#img");
const btn = document.querySelector("#btn");

// with using async-await

// const getImage = async() => {
//     console.log("fetching data....");
    
// let response = await fetch(URL);
// console.log(response);

// let image = await response.json();
// console.log(image);

// img.setAttribute("src", image.message);
// }

// btn.addEventListener("click", getImage);

// btn.addEventListener("mouseover", () => {
//     btn.innerText = "Badal gyaa";
// })

// btn.addEventListener("mouseout", ()=> {
// btn.innerText = "Click to generate"
// }
// )

// with using  promise chain/

function getImage() {
    fetch(URL).then((response) => {
        return response.json();
    }).then( (json) => {
img.setAttribute("src", json.message);
    })
}

btn.addEventListener("click", getImage);