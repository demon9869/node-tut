//CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");
const sayHi = require("./05-utiles");
// console.log(names);

const data = require("./06-alternative-flavor");

require("./07-mind-grenade");
sayHi("mevvik");
sayHi(names.name);
sayHi(names.name1);
