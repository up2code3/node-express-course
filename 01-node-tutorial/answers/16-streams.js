const {createReadStream} = require('fs')

const bigStream = createReadStream('./content/big.txt', {highWaterMark:200, encoding:'utf-8'})

let counter = 0

bigStream.on('data',(chunk) => {
    counter++
    console.log(`\nthis is chunk ${counter}`,'\n',chunk)
})

bigStream.on('end',() => {
    console.log('total chunk:' , counter)
})

bigStream.on('error',(error) => {
  console.log(error)  
})