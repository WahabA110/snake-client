const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input')

// const host = '135.23.223.133'
// const port = 50542

console.log("Connecting ...");
connect();

setupInput()