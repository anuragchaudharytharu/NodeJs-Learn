const fs = require('fs');
const path = require('path');

const currentDirectoryPath = path.join(__dirname, 'CRUD');

if (!fs.existsSync(currentDirectoryPath)) {
  // create folder
  fs.mkdirSync(currentDirectoryPath);
  console.log('CRUD Folder Created');
}

const filePath = `${currentDirectoryPath}/apple.txt`;

// create file
fs.writeFileSync(filePath, 'this is simple text file');

// read file
fs.readFile(filePath, 'utf8', (errors, data) => {
  console.log(data);
});

// update file
fs.appendFile(filePath, '\nThis is the second line', (error) => {
  if (!error) console.log('File is created');
});

// rename file
fs.rename(filePath, `${currentDirectoryPath}/fruit.txt`, (error) => {
  if (!error) console.log('File is renamed');
});

// delete file
fs.unlinkSync(`${currentDirectoryPath}/fruit.txt`, (error) => {
  if (!error) console.log('File is deleted');
});
