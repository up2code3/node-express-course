const {readFileSync, writeFileSync} = require('fs')

//first
writeFileSync(
    //name and location of file 
    './temporary/fileAlt.txt',
    //what the text file says
    'this is the first line.\n'
)
//second
writeFileSync(
    './temporary/fileAlt.txt',
    'this is the second line.\n',
    //third argument/parameter flag a appends to exsisting file
    {flag:'a'}
)

//third
writeFileSync(
    './temporary/fileAlt.txt',
    'and finally the third and last line.\n',
    {flag:'a'}
)

const fileAText = readFileSync('./temporary/fileAlt.txt','utf8')
console.log(fileAText)
