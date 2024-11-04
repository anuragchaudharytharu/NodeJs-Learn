const fs = require('fs'); //file system module import

const input = process.argv;

if (input[2] === 'add') {
  // add/create file
  fs.writeFileSync(input[3], input[4]); //input[3] ====> the file name, input[4] ====> content inside that file
} else if (input[2] === 'remove') {
  //removes file
  fs.unlinkSync(input[3]);
} else {
  console.log('Invalid Iutput');
}
