const { mul, div } = require("./named_import.js");

const add = (a, b) => {
  console.log(a + b);
};

const sub = (a, b) => {
  console.log(a - b);
};

add(5, 5);
sub(5, 15);
mul(2, 2);
div(5, 5);
