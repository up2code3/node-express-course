const os  = require('os')

const user = os.userInfo()


console.log(`the system uptime is ${os.uptime()}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)
