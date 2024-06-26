const EventEmitter = require('events');

const myEmitter = new EventEmitter(); //

// myEmitter.on('weatherCheckTemp', (temp) => {
//     console.log(`today will be ${temp} degress`)
// })
// myEmitter.on('weatherCheckRain', (rainPercent) => {
//     console.log(`a ${rainPercent}% chance of rain`)
// })

// myEmitter.emit('weatherCheckTemp', 98)
// myEmitter.emit('weatherCheckRain', 12)

myEmitter.on('weatherCheck', (temp,rainPercent) => {
    console.log(`today will be ${temp} degress\nwith a ${rainPercent}% chance of rain`)
})

myEmitter.emit('weatherCheck', 99, 12)