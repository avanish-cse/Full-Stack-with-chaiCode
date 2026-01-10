// /* 1. for loop that loops through the given array and stops when finds a particular element.. and stores values before that element in another array */

// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedFields = [];

// for(i=0; i< teas.length; i++){

//     if (teas[i] === "chai") {
//         break;
//     }else{
//         selectedFields.push(teas[i]);
//     }
//                   // city = teas[i];

//                   // if (city === "chai") {
//                   //     break;
//                   // }else{
//                   // selectedFields.push(city);
//                   // }
// }
// console.log(selectedFields);

// /* 2. for loop that loops through an array and skips only a specific element..  store the other elements in another array */

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] !== "Paris") {
//     visitedCities.push(cities[i]);
//   } else {
//     continue;
//   }
// }

// console.log(visitedCities);

// /* 3. use of 'for-of' loop to iterate through an array, and stop at a particular element, store the elements before that particular element is found */

// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers =[];

// for (const num of numbers) {
//     if(num === 4){
//         break;
//     }else{
//         smallNumbers.push(num);
//     }
// }
// console.log(smallNumbers);

// /* 4. use of 'for-of' loop to iterate through an array, and skips a particular element, store the elements in another array */
// let teas = ["chai", "green tea", "herbal tea", "black tea"];
// let prefferedTeas = [];

// for (const tea of teas) {
//     if (tea === "herbal tea" || tea === "Herbal tea" ) {
//         continue;
//     }else{
//         prefferedTeas.push(tea);
//     }
// }

// console.log(prefferedTeas);






// /* 5. use a for-in loop to llop through an object containing city populations.
//      stop the loop when the population of "Berlin" is found and store and store all previous cities'  populations in a new object 

//      let citiesPopulstion = {
//      "London": 8900000,
//      "New York": 8400000
//      "Paris": 2200000,
//      "Berlin": 3500000
//      };
//      */

// let citiesPopulation = {
//   London: 8900000,
//   "New York": 8400000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };

// let cityNewPopulations = {};

// // console.log(Object.values(citiesPopulstion));

// for (const city in citiesPopulation) {
//   //  console.log(city);
//   //  console.log(citiesPopulation[city]);

//   // key = value
//   if (city === "Berlin") {
//     break;
//   } else {
//     cityNewPopulations[city] = citiesPopulation[city];
//   }
// }
// console.log(cityNewPopulations);



// /* 6. use a for-in loop to loop through an object containing city populations.
//     Skip any city with a population less than 3 million and store the rest in a new object named 'largeCities' ...

//     let worldCities = {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Berlin": 3500000,
//     "Paris": 2200000
//     };
// */

// let cityPopulations = {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Berlin": 3500000,
//     "Paris": 2200000
//     };


//     let largeCities = {};

//     for (const city in cityPopulations) {
//         if (cityPopulations[city] < 3000000
//         ) {
//             continue;
//         } else {
//             largeCities[city] = cityPopulations[city];
//         }
//     }
// console.log(largeCities);


/* 7. write a foreach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].
//       Stop the loop when "chai" is found, and store all the previous tea types in a new array.....
// */

// let array = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];

// array.forEach(function (tea) {
//     if (tea === "chai") {
//         return;  // break doesn't work in functions, it works only in loops
//     } else {
//         availableTeas.push(tea);
//     }
// });

// console.log(availableTeas);


// /* 8.  foreach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
// //       Skip the "Sydney" , and store all other cities in a new array. */

// let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledCities = [];

// worldCities.forEach(city => {
//     if (city === "Sydney") {
//         return;
//     } else {
//         traveledCities.push(city);
//     }
// });

// console.log(traveledCities);


// /* 9. write  a for loop  that iterates through the array [2, 5, 7, 9].
//       Skip the value '7' and multiply the rest  by 2. Store the result in a new array. 
// */

// let numbers = [2, 5, 7, 9];
// let doubledNumbers = [];

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] === 7) {
//         continue;
//     } else {
//         doubledNumbers.push(numbers[index] * 2);
//     }
    
// }

// console.log(doubledNumbers);


// /* 10. use a for-of loop to iterate through the array  ["chai", "green tea", "black tea", "  jasmine tea", "herbal tea"] and
// stop when the length of the current tea name is greater than 10.
//  Store the rest in another array */ 


// let teas = ["chai", "green tea", "black tea", "  jasmine tea", "herbal tea"];
// let shortTeas = [];

// for (const tea of teas) {
//     if (tea.length > 10) {
//         continue;
//     } else {
//         shortTeas.push(tea);
//     }
// }
// console.log(shortTeas);


