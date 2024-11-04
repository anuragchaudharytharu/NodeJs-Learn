const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data recieved of user ${name} with id: ${id}`);
});

// we can  have as many events method we want
customEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customEmitter.emit('response', 'John', 34);

/*
NOTE: 
  .emit() method order matter. It should be after our sunscribe event method to invoke that event. Our event wont invoke if we place .emit() method before our subscribe event method 

    example: 
      customEmitter.emit('response');    
      customEmitter.on('response', () => {
        console.log(`data recieved`);
      });

  It doesnot make sense that we emit events before even listening those events
*/
