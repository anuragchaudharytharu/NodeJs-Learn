// EXAMPLE
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, '6-SYNC-data');

//
//
//
//
//
//Sync way to append, write, read file

//.existSync() ===> used to synchronously check if a file exists in the given path or not.
// .mkdirSync() ====> used to create a directory Synchronously

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('dataFolder created');
} //here, we check if dataFolder named '6-SYNC-data' exists or not. If it doesnot exist, we create that dataFolder '6-SYNC-data'

const filePath = path.join(dataFolder, '6-SYNC-example.txt');

// write file
fs.writeFileSync(filePath, 'Hello from node JS');
console.log('file created successfully');
// read file
const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log('File Content : ', readContentFromFile);

// .append() => append/add new content to the existing file content
// append new line to the existing file
fs.appendFileSync(filePath, '\n This is a new line added to that file');
console.log('new file content added');

//
//
//
//
//
// Async way to append, write, read file
const asyncFilePath = path.join(dataFolder, '6-ASYNC-example.txt');

// write file
fs.writeFile(asyncFilePath, 'Hello Async Node JS', (err, res) => {
  if (err) throw err;
  console.log('Async File is created successfully');

  // read file
  fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Async file content : ', data);

    // append new line to the existing fiel
    fs.appendFile(asyncFilePath, '\nThis is another line added', (err) => {
      if (err) throw err;
      console.log('New line added to the async file');

      // read updated file content
      fs.readFile(asyncFilePath, 'utf8', (err, updateddata) => {
        if (err) throw err;
        console.log('Updated file content is : ', updateddata);
      });
    });
  });
});
