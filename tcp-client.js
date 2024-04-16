const net = require('net')

const client = net.createConnection({ port: process.argv[2] });
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});