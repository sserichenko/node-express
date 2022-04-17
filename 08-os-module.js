// OS MODULES ----------
const os = require("os");

// Info abot current User
const user = os.userInfo();
console.log(user);

// methods return the system uptime in seconds
const time = os.uptime();
console.log(`System uptime is ${time} seconds`);

const currentOperationSystem = {
    name: os.type(),
    version: os.version(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOperationSystem);