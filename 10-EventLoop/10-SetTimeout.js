// started operating system process
console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');
// completed and exited operating system process

/*
   setTimeout() gets offloaded and is placed on call stack. It doesnot get executed even though we have set the time of 0 sec. It only execute after all the other immediate codes are executed
*/

/*
Output: 
  first
  third
  second
*/
