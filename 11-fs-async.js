// FS ASYNC
const { readFile, writeFile } = require("fs");
console.log("start")
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) return null;
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) return null;
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Async creating file : ${first} ${second}`,
      (err, result) => {
        if (err) return null;
        console.log("write callback result");
      }
    );
  });
});
console.log("Done");