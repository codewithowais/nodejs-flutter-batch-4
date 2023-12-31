console.log("Hello World");

// import fs from ""; // ES6
const fs = require("fs"); // ES5

fs.writeFileSync("node.txt", "Hello this is node txt file....!!!!");
fs.readFile("node.txt", "utf-8", (err, data) => {
  if (!err) console.log(data);
});
