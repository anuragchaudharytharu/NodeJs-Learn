const http = require('http');
const data = require('./data');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' }); //200 is the standarad GET Api code
  res.write(JSON.stringify(data));
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`server isnow listening the port ${port}`);
});
