const net = require('net');
const {connect} = require('./client');
// const {setupInput} = require('./input')

// const host = '135.23.223.133'
// const port = 50542

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

};

setupInput()
console.log("Connecting ...");
connect();
