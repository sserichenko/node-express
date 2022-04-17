// FS SYNC
const {readFileSync, writeFileSync} = require("fs");

console.log("start")

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
const third = readFileSync("./content/third.txt", "utf-8");

writeFileSync("./content/result-sync.txt", `${first} + ${second} + ${third}`, {flag: 'a'});
console.log("Done");
console.log("Starting the next one");