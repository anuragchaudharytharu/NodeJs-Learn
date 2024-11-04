const fs = require('fs');
const path = require('path');

const currentDirectoryPath = path.join(__dirname, 'Files');
console.log(currentDirectoryPath); //D:\WEB DEV journey\MERN STACK\BackEnd\Node JS\Learn NodeJs\node js tutorial\12-Show-File-List-with-FileSystem\Files

if (!fs.existsSync(currentDirectoryPath)) {
  fs.mkdirSync(currentDirectoryPath);
  console.log('Folder created');
}

for (let i = 1; i <= 5; i++) {
  fs.writeFileSync(
    `${currentDirectoryPath}/hello${i}.txt`, // it work like this =====> D:\WEB DEV journey\MERN STACK\BackEnd\Node JS\Learn NodeJs\node js tutorial\12-Show-File-List-with-FileSystem\Files\hello${i}.txt
    `this is test${i} file`
  );
  console.log(`File hello${i} created`);
}

// .readdir(directory, (error, items) => {}) =====> to read the list of files (i.e it list files in an array) in the given directory

// to read the list of files
fs.readdir(currentDirectoryPath, (err, files) => {
  console.log(files);
  files.forEach((item) => {
    console.log(`File name is ${item}`);
  });
});
