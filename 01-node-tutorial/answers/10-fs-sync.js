const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
const third = readFileSync('./content/third.txt','utf-8')
console.log
writeFileSync('./temporary/fileA.txt',`\n this is result 1 ${first}`);
writeFileSync('./temporary/fileA.txt',`\n this is result 2 ${second}`,{flag: 'a'})
writeFileSync('./temporary/fileA.txt',`\n this is result 3 ${third}`,{flag: 'a'})

// console.log(readFileSync('./temporary/fileA.txt','utf-8'))

console.log('done with this task')
console.log('starting new task')