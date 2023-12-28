console.log("Hey Node, I am trying to learn NodeJs.");

// console.log(window);
// window is browser object and it is neglect from V8 engine

// Modules

// const math = require("./math");

// Import ES Module
import { add, sub } from "./math";

// console.log("value of Math is:", math.add(1, 3));
// console.log("value of Math is:", math.sub(1, 3));

console.log("value of Math is:", add(1, 3));
console.log("value of Math is:", sub(6, 4));
