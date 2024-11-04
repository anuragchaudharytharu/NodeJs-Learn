const path = require('path');

// .dirname()
console.log('The directory name is :', path.dirname(__filename)); //to get the directory path name

// .extname() ====> to get the extension name of the file
console.log('The extension name of the file is : ', path.extname(__filename));

// .sep ====> method to get path separator of our file
console.log(path.sep); //output is :  \

// .join ====> joins a sequence of path segments using that platform specific separator as a limiter and it also returns normalized resulting path
const filePath = path.join('/content/', '5-subfolder', '5-test');
console.log(filePath);

// .basename ====> to get the file name. We can also get only the base portion i.e last portion of the file path
const base = path.basename(filePath);
console.log(base);

console.log(('The file name is : ', path.basename(__filename))); //to get the file name

// .resolve =====> to return absolute path i.e whole path.  It take sequence of path segments or path ssegments and resolves that path or path segments to returns absolute path
const absolute = path.resolve(
  __dirname,
  'content',
  '5-subfolder',
  '5-test.txt'
);
console.log(absolute);
