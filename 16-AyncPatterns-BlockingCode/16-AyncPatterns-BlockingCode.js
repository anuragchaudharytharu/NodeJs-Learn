const http = require('http');

const server = http.createServer((req, resp) => {
  const url = req.url;
  if (url === '/') {
    resp.end('Home Page');
  } else if (url === '/about') {
    // BLICKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    resp.end('About Page');
  } else {
    resp.end('Error Page');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
