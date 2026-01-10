function log(anything){
  console.log(anything);
  
}

// revision from array to functions  >> callbacks too 

// //  Q1.
// let marks = [85, 97, 44, 37, 76, 60];
// let markSum = 0;

// for (const mark of marks) {
//     markSum += mark;

// }

// console.log(`The  Average marks of the class : ${markSum / marks.length}`);

// Q2.

// let prices = [250, 645, 300, 900, 50];
// let newPrices = [];

// for (let price of prices) {
//     // discounted = price - price*0.1;
//     newPrices.push(price - price*0.1);

// }
// console.log(newPrices);

// methods -------

//  push
// let names = ["Avanish","Rahul", "Sudhanshu"];
// console.log(`without nalla: ${names}`);

// let nallaAdded = names.push("Shivam");
// console.log(`after adding nalla: ${names}`);

// pop :

// let ourGroup = ["Avanish", "Lalu Bhai", "Sudhanshu", "Rahul", "Shivam"];
// let nalla = ourGroup.pop();
// console.log(nalla);

// console.log(ourGroup);

//  shift:

// let numbers = [1, 2, 3, 4, 5, 6];
// let shiftedNum = numbers.shift();
// console.log(shiftedNum);
// console.log(numbers);

//  unshift:

// let result = ["pass", "fail", "pass", "fail", "pass",];
// result.unshift("pass with GR 06");
// console.log(result);

// slice:

// let cars = ["ALto 800", "Maruti", "Scorpio n", "Fortuner", "Tarzen"];
// let favouriteCars = cars.slice(2, 4);
// console.log(cars);
// console.log(favouriteCars);

// splice:

// let numbers = [1, 2, 6, 3, 8, 5, 7, 8, 9];
// let deletedNumbers = numbers.splice(2, 4, 3, 4, 5, 6);
// console.log(numbers);
// console.log(`deleted numbers: ${deletedNumbers}`);

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

//  functions -----------

// const summ = (a, b) =>  {
//   return a+b;
// }

// let  sum = summ(5,6);
// log(sum);

// const subs = (a,b) => a-b;
// let sub = subs(6,3);
// log(sub);


//Q...


// function countVowels(string) {
//  let vowels = 0;
//  string= string.toLowerCase();
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] === "a" ||
//       string[i] === "e" ||
//       string[i] === "i" ||
//       string[i] === "o" ||
//       string[i] === "u"
//     ) {
//       vowels++;
//     }
//   }
// return vowels;
// }
// const vowelsIn = countVowels("Avanish Chaurasiya");
// log(vowelsIn);

// or

// const countVowels = (string) => {
//   let count = 0;
//   string = string.toLowerCase();
//   for (const letter of string) {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// let vowels = countVowels("Avanish Chaurasiya");
// console.log("The number of vowels is", vowels);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

//  for each loop :

// let array = [1, 2, 3, 4, 5, 6];

// // array.forEach(function printVal(val) {
// //   console.log(val);
// // });

// array.forEach((val) => {
//   console.log(val);
// });

// // eg  02.

// /* Higher Orer Function/Methods : functions/methods that either takes another function as a parameter or return a function as their output */

// let cities = ["Mumbai", "Delhi", "Goa", "Lucknow"];

// cities.forEach((city, idx,  cities) => {
//   console.log(city.toUpperCase(), idx, cities);

// });

// Q3.

// let numbers = [13, 43, 53, 12, 16, 26];
// numbers.forEach(number => {
//   number**= 2;
//   console.log(number);

// });

// function squre(num) {
//   num**= 2;
//   console.log(num);

// }

// let numbers = [13, 43, 53, 12, 16, 26];
// numbers.forEach(squre);

// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------

/*  Map method: used to create a new array (clone) but with operation performed on each element(if we want) */

// let numbers = [13, 43, 53, 12, 16, 26];
// let  numSqure = numbers.map((num) => num**2);
// console.log(numSqure);
// console.log(numbers);

/* filter method */

// let numbers = [13, 43, 53, 12, 16, 26];
// let evenNums = numbers.filter((num) => num%2 === 0);
// console.log(evenNums);

/* reduce method */

// let numbers = [13, 43, 53, 12, 16, 26];
// // let output = numbers.reduce((previous , current) => previous + current)
// let output = numbers.reduce((previous,  current) => {
//   return previous + current;
// })
// console.log(output);

// Q.  find the biggest nuumber

// let numbers = [13, 43, 53, 12, 16, 26];
// let output = numbers.reduce((previous, current) => {
//  return previous > current ? previous : current;
// });
// console.log(output);

//   Q.

// let marks = [76, 87, 90, 94, 99, 93, 56, 92, 78];
// let toppersMarks = marks.filter((mark) => mark>90);
// console.log(toppersMarks);

// // Q.

// let n = Number(prompt("Enter any number"));
// let array = [];
// for (i = 1; i <= n; i++) {
//   if (n < 1000) {
//     array.push(i);
//   } else {
//     console.log("Enter number below 1,000 !!");
//     break;
//   }
// }

// console.log("The Array is: ",array);


// let sumOfArray =  array.reduce((pre, curr) => {
//   return pre + curr;
// });

// console.log("sum of all elements: ", sumOfArray);


// let product = array.reduce((pre, curr) => pre*curr );
// console.log("The product of all elements is: ", product);


// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + "from Apna College students";

let divs = document.querySelectorAll(".box");
let  idx = 1;
for (let div of divs) {
  // console.log(div.innerText);
  div.innerText = `new unique value  ${idx}`;
  idx++;
  
}

// divs[0].innerText = "New unique value 1";
// divs[1].innerText = "New unique value 2";
// divs[2].innerText = "New unique value 3";


let dabba = document.querySelector(".dabba");

let id = dabba.getAttribute("id");
console.log(id);
