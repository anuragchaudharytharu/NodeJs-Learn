// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// we split our code into modules

// NOTE - when we import the code by reuire(), we also invoke it if the code has any function and its called in original file

require('./3-mindGrenade'); //automatically invoke the file module to give output 'The sum is : 15

const names = require('./3-names');
const func = require('./3-function');
const number = require('./3-number');
const data = require('./3-alternativeFlavour');

console.log(names); //{ john: 'john', peter: 'peter' }

func('susan'); //Hello there, susan
func(names.john); //Hello there, john
func(names.peter); //Hello there, peter

console.log(number.x, number.y); //10 20

console.log(data); //{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

/*
// or we can destructure and write it like this

  const { john, peter } = require('./3-names');
  const { x, y } = require('./3-number');

  func('susan');
  func(john);
  func(peter);

  console.log(x, y)
*/
