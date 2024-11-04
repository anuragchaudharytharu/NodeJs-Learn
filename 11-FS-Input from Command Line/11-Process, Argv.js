/*
NOTE: 
    WE can use process.argv[index] to create, read, update, delete files
*/

// console.log(process);

console.log(process.argv[5]);
/*
Output : 
[
  'C:\\Program Files\\nodejs\\node.exe', //this is the nodejs saved file path
  'D:\\WEB DEV journey\\MERN STACK\\BackEnd\\Node JS\\Learn NodeJs\\node js tutorial\\Input from Command Line\\apps.js',  //this is the current file path     
  'hello',
  'hi',
  'whats',
  'up'
]
*/

// .argv ===> IN TERMINAL : node  app.js hello hi whats up, if we type this, hello hi whats up this gets added inside the output array. and if we want to access elemeny of that array such 'hi' from above. we need to provide index of it to access it
