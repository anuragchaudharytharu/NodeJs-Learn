// readfileSync() ====> reads or get the content of existing files

const { readFileSync } = require('fs');
/*
// we can also write above code like this

    const fs = require('fs');
    fs.readFileSync();
*/
console.log('start');

const first = readFileSync('./content/6-SYNC-first.txt', 'utf8');
const second = readFileSync('./content/6-SYNC-second.txt', 'utf8');
console.log(first);
console.log(second);

// util module ====> makes the codes into Promises so we can use it for async-await

// .promises =====> convert code into Promises

// .unlinkSync(filename) ====> removes file

// .readdir(directory, (error, items) => {}) =====> to read the list of files (i.e it list files in an array) in the given directory

// .append(filePath, 'content') => append/add new content to the existing file content

//.existSync() ===> used to synchronously check if a file exists in the given path or not.

// .mkdirSync() ====> used to create a directory Synchronously

// writeFileSync() ===> create a file if its not available and overrides the content of the file if there exist file already

const { writeFileSync } = require('fs');
/*
// we can also write above code like this

    const fs = require('fs');
    fs.writeFileSync();
*/
writeFileSync(
  './content/6-SYNC-result.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } //here we are overiding the content nad then we are appending the new value when we create flag. here a means appende
);

console.log('done with this task');
console.log('starting the next task');
