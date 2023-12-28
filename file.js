// File System

const fs = require("fs");

// to create folder
// fs.mkdirSync("docs");

// sync
// create file if not exist or override the data
// fs.writeFileSync("./docs/test.txt", "Hello, This file is created by Nodejs ");

// Async
// fs.writeFile("./docs/test1.txt", "This is Async Function", (err) => {
//   console.log(err);
// });

// Read

// Sync
// const result = fs.readFileSync("./docs/test.txt", "utf-8");
// console.log(result);

// Note
/**
 * Sync function always return some data.
 * Async function does not return anything and print the data in the call back function
 * In Async Function, callback function is important
 */

// fs.readFile("./docs/test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// Update the file
// fs.appendFileSync("./docs/test.txt", `${new Date().getTime()} update value\n`);

//copy file
// fs.copyFileSync("./docs/test.txt", "./docs/copy.txt");

// delete File
// fs.unlinkSync("./docs/copy.txt");
