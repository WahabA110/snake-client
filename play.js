const net = require('net');

// const host = '135.23.223.133'
// const port = 50542

// establishes a connection
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

console.log("Connecting ...");
connect();