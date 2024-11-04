//GLOBALS MODULE - NO WINDOW

// GLOBAL MODULE: its a module that doesnot need importing i.e require()

// __dirname - path to the current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

// console.log is an example of global module where as fs is an example of non-global module

// fs.writeFileSync()

// writeFileSync() ===> create a file if its not available and overrides the content of the file if there exist file already

const file = require('fs'); // fs is file system which we used inside require(). t contains method like writeFileSync()
file.writeFileSync('2-hello.txt', 'code step by step'); //here writeFileSync() creates a file named 'hello.text' that has 'code step by step content' inside it

const create = require('fs').writeFileSync; //directly using writeFileSync() method of file system (fs)
create('2-it.txt', 'saying goodbye'); //create file named 'bye.txt' that contains 'saying goodbye' content inside it
