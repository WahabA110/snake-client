const net = require('net');
const {IP, PORT} = require('./constants')

// establishes a connection
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: WA')
  });

  return conn;
}



module.exports = {
  connect
};



    // setInterval(() => {conn.write('Move: up')}, 300)
    // setTimeout(() => {conn.write('Move: up')}, 750)
    // setTimeout(() => {conn.write('Move: up')}, 1200)