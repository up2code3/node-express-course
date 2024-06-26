const {createReadStream} = require('fs')

const stream = createReadStream('../content/big.txt',
    {highWaterMark: 20000,
    encoding:'utf8'},
);

let counter = 0;

stream.on('data', (chunks) =>{
    counter++;
    console.log(chunks.length)
})

stream.on('end', () => {
    console.log('No more data')
    console.log(`total number of chunks is ${counter}`)
} )

stream.on('error', (err) => {
    console.log('Housten we have a problem:' , err)
})

console.log('this is from the answers folder')
