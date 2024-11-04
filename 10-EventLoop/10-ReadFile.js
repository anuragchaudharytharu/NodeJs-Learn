const { readFile } = require('fs');

console.log('started a first task');

// CHECK FILE PATH!!!!
readFile('../content/6-SYNC-first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});

console.log('starting next task');
console.log('other task');

/*
Working: 
  first we get 'started a first task' as an output, then eventloop offload readFile until result is resolved/errors. As readFile takes sometime, till then it skips readFile and keeps reading and executing all the other other immediate code first
*/

/*
output:
  started a first task
  starting next task
  other task
  Hello, this is the first text file for file system module      
  completed first task
*/
