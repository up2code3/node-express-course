const {writeFile, readFile} = require('fs').promises

writeFile('./temporary/temp.txt','1st now we are using dot then')
.then(() => {
    return writeFile('./temporary/temp.txt','\n2nd now we are using dot then',{flag: 'a'})
})
.then(() => {
    return writeFile('./temporary/temp.txt','\n3nd now we are using dot then',{flag: 'a'})
}) 
.then(() => {
    console.log( readFile('./temporary/temp.txt','utf-8') )
})

.catch((error) => {
    console.log('error occurred',error)
})