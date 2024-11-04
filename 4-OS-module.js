const os = require('os');

// method to return info about current user
//.userInfo()
const user = os.userInfo();
console.log(user); //output is : {uid: -1, gid: -1, username: 'Anurag', homedir: 'C:\\Users\\Anurag', shell: null}

// method to return the system uptime in seconds
//.uptime()
console.log(`The system uptime is ${os.uptime()} seconds`); //output is : The system uptime is 419592.062 seconds

// method to get current operating system info
//.type(), .release(), .totalmem(), freemem()
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS); //{ name: 'Windows_NT', release: '10.0.22631', totalMemory: 8315809792, freeMemory:1341374464 }
