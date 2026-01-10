// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// const vowels = countVowels("Rahul Vishwakarma");
// console.log(`vowels: ${vowels}`);


// const countVow = (str) => {
//   count = 0;
//   for(const char of str){
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     count++;
//   }
// }
//   return count;
// };


// let str = "Jai Maheshmatiii";
// for (const letter of str) {
//   console.log(`${letter} `);
  
// }


// let cars = {
//   brand: "Bugatti",
//   engine: "8l V shaped",
//   color: "Black"
// }

// for (const key in cars) {
//  console.log("key =", key, "value =", cars[key]);
 
  
  
// }


// for(let  num = 0; num <= 100; num++) {
//   if(num % 2 === 0){
//     console.log(num);
    
//   }
// }


// let gameNum = 16;
// let userNum = Number(prompt("Guess the number"));
// while( userNum !== gameNum) {
//   userNum = Number(prompt("You guessed it wrong !! Guess again"));
// }
//     console.log("Congratulations !! You Guessed it correct !!!");
    
  


// let str = "  Apna Collge  ";
// let newStr = str.toUpperCase();

// let newStr2 = str.toLowerCase();
// let trimmedStr = str.trim();

// console.log(newStr);
// console.log(newStr2);
// console.log(trimmedStr);



let fullName = prompt("Enter your full name !");
let userName = "@" + fullName.toLowerCase().trim() +fullName.trim().length;
console.log("username is: ", userName);