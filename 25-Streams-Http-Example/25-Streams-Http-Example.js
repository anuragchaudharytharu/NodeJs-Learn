const http = require('http');
const fs = require('fs');
const zlib = require('zlib'); //zip file module

// stream read ---> zipper(our file) ---> fs write stream
fs.createReadStream('../content/25-Streams-Http-Example-BigFile.txt').pipe(
  zlib
    .createGzip()
    .pipe(fs.createWriteStream('./25-Streams-Http-Example-BigFile.zip'))
);

// Our servers
const server = http
  .createServer((req, res) => {
    /*
    const text = fs.readFileSync(
      '../content/25-Streams-Http-Example-BigFile.txt',
      'utf8'
    );
    res.end(text);

    Problem with this above code is that e are passing huge file all at once which is not very userfriendly ast it slows down the response when client request the file.

    To solve this problem, we can use creatReadStream to send the data in chunks
    */

    const fileStream = fs.createReadStream(
      '../content/25-Streams-Http-Example-BigFile.txt',
      'utf-8'
    );

    // 'open' ======> The open event tells us that the stream is open so that we can handle that in the code.

    // .pipe() =======>  allows data to be transferred from one stream to another seamlessly.

    fileStream.on('data', (chunk) => res.end(chunk));
    fileStream.on('end', () => res.end());

    /*
    Another way:

      fileStream.on('open', () => {
        fileStream.pipe(res); //here, fileStream is readStream where as res is writeStream. So we are passing data from readStream to writeStream (i.e fileStream to res)
      });
    */

    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
