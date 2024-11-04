const fs = require('fs'); //importing/requiring file system

const createReadStream = fs.createReadStream;

/*
{highWaterMark: sizeinBytes} ====> used to control the default size of Buffer when we read the file with createReadStream
To control the size of Buffer we can use highWaterMark method inside createReadStream
*/
const stream = createReadStream('../content/23-Create-big-file.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log(result);
});

// 'error' ========> Its built-in event to get errors if occured used in 'on' method of EventEmitter

stream.on('error', (err) => {
  console.log(err);
});
