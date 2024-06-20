const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('../content/first.txt','utf8' )
const second = readFileSync('../content/second.txt','utf8' )

writeFileSync(
    './temporary/fileA.txt',
    `I guess this is the 1st line:\nand this would be the 2nd: ${first}\nand finally the third and last line: ${second}`,
    {flag:'a'}
)

const allText = readFileSync('./temporary/fileA.txt','utf8')
console.log(allText)
console.log('done')

