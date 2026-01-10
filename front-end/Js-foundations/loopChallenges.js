// /* 1. a while loop for sum of all numbers from 1 to 5 */
// let i=1;
// let sum = 0;
// while ( i<=5) {
//     sum = sum + i;
//     i++;

// }

// console.log(sum);

// /* count down from 5 to 1 and store the value in an array */

// let i = 5;
// let countdown = [];
// while (i >= 1) {
//     console.log(i);
//    countdown.push(i);
//    i--;

// }
// console.log("The array is " + countdown);

// /*  a 'do while' to take input user's fav tea until they enter "stop" + store each input in an array */
//  // runs in only browser console //

// let teaCollection = [];
// let favTea;

// do {
//   favTea = prompt(`Enter your favorite tea type (type "stop" to  finish)`);
//   if (favTea !== "stop") {
//     teaCollection.push(favTea);
//   }
// } while (favTea !== "stop");

// console.log(teaCollection);

// /* a do while loop to add numbers from 1 to 3 and stores the result in "total" */

// let i = 1;
// let total = 0;
// do {
//     total += i;
//         i++;
// } while (i<=3);

// console.log(total);

// /* a for loop to multiply each element in the array `[2, 4, 6]` by 2 and stores the value in a new array "multipliedNumbers"*/

// let array = [2, 4, 6];
// let i;
// let multipliedNumbers = [];

// for(i = 0; i<=array.length ; i++){    // wrong code 💀⚡☢️
//     let x= array.shift();
//     x*= 2;
//     multipliedNumbers.push(x);
// }
// console.log(multipliedNumbers);



//  /* a for loop to multiply each element in the array `[2, 4, 6]` by 2 and stores the value in a new array "multipliedNumbers"*/

// let array = [2, 4, 6];
// let multipliedNumbers = [];

// for (let i = 0; i < array.length; i++) {

//     multipliedNumbers.push(array[i] * 2); // all operations in just one line code

// //   x = array[i];
// //   x *= 2;
// //    multipliedNumbers.push(x);
// }
// console.log(multipliedNumbers);



// /* a for loop to list all cities in array ["Paris", "New York", "Tokyo", "London"] and store each city in a new array*/

// let array = ["Paris","New York", "Tokyo", "London"];
// let cityList = [];

// for (let index = 0; index < array.length; index++) {
    
//     let element = array[index];
//     cityList.push(element);
// console.log(element);

    
// }

// console.log(cityList);
