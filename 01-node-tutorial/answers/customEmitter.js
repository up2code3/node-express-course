const eventEmitter = require('events')

const myEvent = new eventEmitter()

myEvent.on('airhorn', () => {
    console.log(BRRRRRRNNNNNNNNNNN)
})

myEvent.emit('airhorn')