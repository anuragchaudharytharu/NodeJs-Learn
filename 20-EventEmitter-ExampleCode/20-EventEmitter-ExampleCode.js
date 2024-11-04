const EventEmitter = require('events'); //importing events module in EventEmitter constant

const customEmitter = new EventEmitter(); //here we have instance of class of our event module

// .on('eventName', () => {}) =====> listen for an event
// .emit('eventName', callbackFnParameters) ======> trigger an event

customEmitter.on('response', () => {
  console.log(`data recieved`);
});

// once we have subscribed to an specific events, we wanna emit that event. It means, we have invoked that specific event
customEmitter.emit('response');

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
