// /* 1.  storing value from an array in another variables   */

// let teaFlavors= ["green tea", "black tea", "oolong tea"];
// let firstTea= teaFlavors[0];

// let teaFl= new Array("green tea", "black tea", "oolong tea") // other way to declare an array

// console.log(firstTea);

// console.log(teaFl);

// let cities = new Array("London", "Tokyo", "Paris", "New York");
// let favoriteCity = cities[2];
// console.log(favoriteCity);

// let teaTypes = new Array("herbal tea", "white tea", "masala chai");
// console.log(teaTypes);

// teaTypes[1] = "jasmine tea";
// console.log(teaTypes);


/* 2. Adding element in an existing array  */

// //first method //

// let cityVisited = ["Mumbai", "Sydney"];
// cityVisited[2] = "Berlin";
// console.log(cityVisited);


// /* 3. Second method */

// let cityVisited = ["Mumbai", "Sydney"];
// console.log(cityVisited.length);

// cityVisited[cityVisited.length] = "Berlin";
// console.log(cityVisited);


// /* 4. Using Push method */

// let cityVisited = ["Mumbai", "Sydney"];
// cityVisited.push("Berlin");
// console.log(cityVisited);


// /*5. pop and save values */

// let teaOrders = ["chai", "ice tea", "matcha", "earl gray"];
// const lastOrder = teaOrders.pop(); 
// console.log(lastOrder);
// console.log(teaOrders);

// /* 6. creating a soft copy of an array */

// let popularTeas = ["green tea", "oolong tea","chai"];
// let softCopyTeas = popularTeas;

// console.log(softCopyTeas);

// popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);


// /* 7. creating a hard copy of an array */

// let topCities = ["Berlin", "Singapore", "New york"];
// let hardCopyCities = [...topCities];
// // let hardCopyCities = topCities.slice();
// topCities.pop();

// console.log(topCities);

// console.log(hardCopyCities);


/* concatination of arrays */


// let europeanCities = ["Paris", "Rome"];
// let asianCities = ["Tokyo", "Bangkok"];

// // let worldCities = europeanCities + asianCities;  //  does'nt work 

// // let worldCities = [europeanCities, asianCities]  // creates another array in an array

// let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);

// console.log(typeof(worldCities));


// /* storing the length of an array in a variable */


// let teaMenu = ["masala chai", "oolong tea","ggreen teta", "earl tea"];
// let menuLength = teaMenu.length;
// console.log(menuLength);



// /* find: does the array includes this particular element */

// let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
// let isLondonInList = cityBucketList.includes("London");

// console.log(isLondonInList);
