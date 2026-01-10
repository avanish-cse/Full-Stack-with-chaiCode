const body = document.querySelector("body");
body.style.backgroundColor = "#008080";
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
body.prepend(newBtn);
newBtn.style.backgroundColor = "rgb(255, 0, 0)";
newBtn.style.color = "#fff";
newBtn.style.padding="5px";


// Q2.


let para = document.querySelector("p");
// para.setAttribute("class", "orangeText"); // we don't  wanna overwrite the class..
para.classList.add("orangeText");
// para.classList.remove("orangeText");

