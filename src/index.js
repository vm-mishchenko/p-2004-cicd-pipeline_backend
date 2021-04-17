const http = require('http');

const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is Backend"}`);
});

server.listen(8080);
console.log('Node.js web server at port 5000 is running..')
