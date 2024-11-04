const http = require('http');

// .createServer() ===> it takes function as a parameter

// req ===> incoming request from the client
// res ===> info, result, response sent back as per the request of the client

const dataControl = (req, res) => {
  // console.log(req);
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to our home page');
  } else if (url === '/projects') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is our project page');
  } else {
    404,
      res.end(`
      <h1>OOPS!</h1>
      <p>We cab't seem to find the page that you are looking for</p>
      <a href='/'>Back Home</a>
      `);
  }
};

const server = http.createServer(dataControl);

// server should be able to listen to a particular port which we will be able to recieve request and send a  response back
const port = 3000;
server.listen(port, () => {
  console.log(`server isnow listening the port ${port}`);
});

// NOTE: We dont exist from our server after running in our terminal as it keeps on listening for the request continuously. And we also want our server to always be up
