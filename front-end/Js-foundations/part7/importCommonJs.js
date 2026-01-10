const mathModule = require("./exportCommonjs.js"); // common modules work  only in node js / not on browsers

console.log(mathModule.add(4, 6));

console.log(mathModule.subtract(65, 45));
