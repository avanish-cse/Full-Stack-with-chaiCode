// objects

const { log2 } = require("three/tsl");

let coldDrinks = {
  coke: "Sprite",
  campa: "Campa cola",
  pepsi: "Slice",
};

console.log(coldDrinks);
console.log(typeof coldDrinks);
coldDrinks.parleAgro = "frooty";
console.log(coldDrinks);

// Arrays

let books = ["48 Laws of Power", "Atomic Habits", "Rich Dad Poor Dad"];
console.log(books);
console.log(typeof books);

// internal type conversion of javascript

let isLoggedIn = true;

num1 = 2;


console.log(isLoggedIn + num1); // considers isLoggedIn as a number cause num1 is a number

console.log( typeof (Number(isLoggedIn) + num1));

console.log(String(isLoggedIn) + num1);



// Experiments

console.log(undefined + num1);

console.log(typeof (undefined + num1)); //NaN aka "Not a Number" is also a number data type :)

myName=  "Avanish";

console.log(myName + num1);
console.log(typeof (myName + num1));
console.log(typeof ("1" + num1));
console.log(num1 + "1");


