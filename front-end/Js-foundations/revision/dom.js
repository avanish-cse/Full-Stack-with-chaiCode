// let btn = document.createElement("button");
// btn.innerText = "Click here!";

// let div = document.querySelector(".div");
// div.after(btn);

// let myName = document.createElement("h1");
// myName.innerText = "Avanish Chaurasiya";
// div.before(myName);

// myName.remove();


const parent = document.querySelector("#parent");
const firstChild = document.querySelector("#child-1");  
const secondChild = document.querySelector("#child-2");  
const thirdChild = document.querySelector("#child-3");  

let parentHeading = document.createElement("h3");
parentHeading.innerText = "This is the main parent div";

parent.prepend(parentHeading);

let firstPara = document.createElement("p")
firstPara.innerText = "This is the first Child node";
firstChild.appendChild(firstPara);

secondChild.innerHTML="<p>This is the second child </p>";
let thirdPara1 = document.createElement("span");
let thirdPara2 = document.createElement("span");
thirdPara1.innerText = "This is the third ";
thirdPara2.innerText = "paragraph";

thirdChild.append(thirdPara1, thirdPara2)

