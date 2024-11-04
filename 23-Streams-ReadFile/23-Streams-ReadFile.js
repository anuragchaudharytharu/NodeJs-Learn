/*
Streams is useful when there is big size of data or file that we want to write and read
Streams helps in memory consumption
Streams are used to read and write data sequentially specially when there is continous source of data or big files
Streams extends from <EventEmitter> class. Essentially it means we can use events like 'on' method and 'emit' method on streams 

There are 4 types of streams and they are:
  Readable : used to read data sequentially
  Writable : used to write data sequentially
  Duplex : used to both read and write data sequentially
  Transform : data can be modified when reading and writing data requentially

Many built-in module in nodejs implements streams interface  
*/

// ReadFile stream
const fs = require('fs'); //importing/requiring file system

// createReadStream(file, {highWaterMark: SizeInBytes, encoding:'utf8'}) =====> createReadStream reads data in chunks. 'createReadStream' extends from events named stream.Readable

const createReadStream = fs.createReadStream;
const stream = createReadStream('../content/23-Create-big-file.txt'); //instead of reading the whole file atonce, it reads the file in chunks/parts.(i.e this method createReadStream reads data in chunks. 'createReadStream' extends from events named stream.Readable )

// 'data' ========>Its built-in event to get data used in 'on' method of EventEmitter

// 'error' ========> Its built-in event to get errors if occured used in 'on' method of EventEmitter

stream.on('data', (result) => {
  console.log(result); //output is <Buffer 65486 more bytes> and so on until the size of the file is fully covered
});

/*
NOTE:
  By default Buffer size is of 65486 bytes(i.e 64 kb)
  We can also control the size of Buffer when we read the file with createReadStream
  To control the size of Buffer we can use highWaterMark method inside createReadStream
*/
