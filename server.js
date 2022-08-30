const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  res.statusCode = 200;
  let users = []
  for (let i = 0; i < 2500000; i++) {
      users.push({
          name: 'User' + i,
          position: 'SW Engineer'
      })
  }
  res.end(JSON.stringify(users));
});

server.listen(port, hostname, () => {
  console.log(`The server is running in http://${hostname}:${port}/`);
});