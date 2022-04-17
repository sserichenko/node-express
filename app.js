// GLOBALS -  NO WINDOW!!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being executed

// ------------------------------------------------------------

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageDependency>

// ---------------------------------------------------

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log('newItems', newItems);