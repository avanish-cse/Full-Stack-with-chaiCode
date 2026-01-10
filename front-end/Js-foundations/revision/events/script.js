// events in Js

let btn = document.getElementById("jsButton");
btn.onclick = () => {
  console.log("Button was clicked");
  let a = 45;
  a++;
  console.log(a);
};

let box2 = document.querySelector("#box2");
let btn2 = document.querySelector("#btn2");

box2.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

btn2.onclick = (evt) => {
  console.log("Button was clicked");
  console.log(evt.type, evt.target, "\n", evt.clientX, evt.clientY);
};

// event listener

let div3 = document.querySelector("#div3");
const btn3 = document.querySelector("#btn3");

div3.addEventListener("mouseover", () => {
  console.log("you're inside the div3 !!");
});

btn3.addEventListener("click", (evt) => {
  console.log("Button 3 was clicked listener 1");
  console.log(evt.timeStamp);
});
btn3.addEventListener("click", (evt) => {
  console.log("Button 3 was clicked listener 2");
  console.log(evt.timeStamp);
});

const handler3 = (evt) => {
  console.log("Button 3 was clicked listener 3");
  console.log(evt.timeStamp);
};
btn3.addEventListener("click", handler3);

//  remove event

btn3.removeEventListener("click", handler3);

// const body = document.getElementById("body");
// const darkModeBtn = document.getElementById("darkMode");
// darkModeBtn.addEventListener("click", ()=> {
// body.classList.remove("white");
// body.classList.add("black");
// darkModeBtn.innerText= "Light Mode";
// });

// darkModeBtn.addEventListener("click", () => {
//     body.classList.remove("black");
// body.classList.add("white");
// darkModeBtn.innerText= "Dark Mode";
// }

const body = document.getElementById("body");
const darkModeBtn = document.getElementById("darkMode");
let currentMode = "light";
darkModeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    body.classList.remove("white");
    body.classList.add("black");
    darkModeBtn.innerText = "Dark Mode";
    currentMode = "dark";
    console.log(darkModeBtn.innerText);
  } else {
    body.classList.remove("black");
    body.classList.add("white");
    darkModeBtn.innerText = "Light Mode";
    currentMode = "light";
    console.log(darkModeBtn.innerText);
  }
});
