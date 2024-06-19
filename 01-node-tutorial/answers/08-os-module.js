//import os
const os = require('os')

const user = os.userInfo()
console.log(user)

const myMemory = {
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(myMemory)

console.log(os.platform())
console.log(os.release())

