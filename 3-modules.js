// Modules ------

const {sayHi} = require("./5-utils");
const {john, mike} = require("./4-names");
const {items, person} = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("SOMEONE");
sayHi(john);
sayHi(mike);

console.log(items, person);