//  default export function (imported default)

import multiply from "./exportEs6.js"; 

console.log(multiply(5, 6));

// importing non-default exports

import {add, subtract, divide} from "./exportEs6.js";

console.log(add(4, 5));
console.log(subtract(6,2));
console.log(divide(12, 45));
// console.log(divide(12, 45).toFixed(4));

