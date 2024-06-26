const {writeFile, readFile} = require("fs").promises

const first = 'This is the first line of .then\n'
const second = 'This is the second line of .then\n'
const third = 'this is the third line of .then\n'

console.log('1')
writeFile('./temporary/temp.txt',`${first}`)
    .then(() => {
        console.log('2')
        return writeFile('./temporary/temp.txt',`${second}`,{flag:'a'});
    })
    .then(() => {
        console.log('3')
        return writeFile('./temporary/temp.txt',`${third}`,{flag:'a'})
    })
    .then(() => {
        console.log('4')
        return readFile('./temporary/temp.txt','utf8');
    })
    .then(data => {
        console.log('5')
        console.log('read complete')
        console.log(data)
    })
    .catch(error => {
        console.log('6')
        console.log('incomplete', error)
    })
    console.log('7')
