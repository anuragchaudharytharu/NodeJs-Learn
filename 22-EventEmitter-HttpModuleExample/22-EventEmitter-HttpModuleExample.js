const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer().listen(5000);
// emits 'request' event
// subcribe to it / listen for it / respond to it

server.on('request', (req, res) => {
  //'request' is the http server event
  res.end('Welcome');
});
